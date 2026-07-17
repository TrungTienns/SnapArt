import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line, Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faImage, faTags, faBlog, faDollarSign, faUsers, faPaintBrush, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import productService from '../../../services/productService';
import orderService from '../../../services/orderService';
import blogService from '../../../services/blogService';
import categoryService from '../../../services/categoryService';
import photoService from '../../../services/photoService';
import './DashboardView.scss';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  ChartDataLabels
);

const DashboardView = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    physicalProducts: 0,
    workshops: 0,
    totalBlogs: 0,
    totalCategories: 0,
    totalPhotos: 0,
  });
  
  const [monthlyRevenue, setMonthlyRevenue] = useState(Array(12).fill(0));

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Fetch all data in parallel
      const [productsRes, ordersRes, blogsRes, categoriesRes, photosRes] = await Promise.allSettled([
        productService.getAll(),
        orderService.getAllOrders(),
        blogService.getAll(),
        categoryService.getAll(),
        photoService.getAllPhotos()
      ]);

      const products = productsRes.status === 'fulfilled' ? (productsRes.value.data || productsRes.value) : [];
      const orders = ordersRes.status === 'fulfilled' ? (ordersRes.value.data || ordersRes.value) : [];
      const blogs = blogsRes.status === 'fulfilled' ? (blogsRes.value.data || blogsRes.value) : [];
      const categories = categoriesRes.status === 'fulfilled' ? (categoriesRes.value.data || categoriesRes.value) : [];
      const photos = photosRes.status === 'fulfilled' ? (photosRes.value.data || photosRes.value) : [];

      // Calculate Stats
      let physicalProducts = 0;
      let workshops = 0;
      products.forEach(p => {
        if (p.product_type === 'workshop') workshops++;
        else physicalProducts++;
      });

      let totalRevenue = 0;
      let revByMonth = Array(12).fill(0);

      orders.forEach(order => {
        // Count all orders or you can filter by status === 'completed'
        if (order.status !== 'cancelled') {
          totalRevenue += parseFloat(order.total_amount) || 0;
          
          // Group by month
          const date = new Date(order.created_at);
          if (!isNaN(date.getTime())) {
            const monthIndex = date.getMonth(); // 0-11
            revByMonth[monthIndex] += parseFloat(order.total_amount) || 0;
          }
        }
      });

      setStats({
        totalRevenue,
        totalOrders: orders.length,
        physicalProducts,
        workshops,
        totalBlogs: blogs.length,
        totalCategories: categories.length,
        totalPhotos: photos.length
      });
      
      setMonthlyRevenue(revByMonth);

    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  // Chart Data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Doanh thu (VND)',
        data: monthlyRevenue,
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#a855f7',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return formatCurrency(context.raw);
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f1f5f9',
          drawBorder: false,
        },
        ticks: {
          callback: function(value) {
            if (value >= 1000000) return (value / 1000000) + 'M';
            if (value >= 1000) return (value / 1000) + 'K';
            return value;
          }
        }
      },
      x: {
        grid: { display: false, drawBorder: false }
      }
    }
  };

  const doughnutData = {
    labels: ['Sản phẩm vật lý', 'Workshop'],
    datasets: [
      {
        data: [stats.physicalProducts, stats.workshops],
        backgroundColor: ['#3b82f6', '#f43f5e'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          if (sum === 0) return '0%';
          let percentage = (value * 100 / sum).toFixed(0) + '%';
          return percentage;
        },
      }
    },
    cutout: '75%',
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Đang tải dữ liệu tổng quan...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Top Stat Cards */}
      <div className="stat-cards-grid">
        <div className="stat-card earning-card">
          <div className="stat-icon-wrapper">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <div className="stat-info">
            <h4>Tổng Doanh Thu</h4>
            <h2>{formatCurrency(stats.totalRevenue)}</h2>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{color: '#3b82f6', background: 'rgba(59,130,246,0.1)'}}>
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <div className="stat-info">
            <h4>Đơn Hàng</h4>
            <h2>{stats.totalOrders}</h2>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{color: '#10b981', background: 'rgba(16,185,129,0.1)'}}>
            <FontAwesomeIcon icon={faPaintBrush} />
          </div>
          <div className="stat-info">
            <h4>Workshops</h4>
            <h2>{stats.workshops}</h2>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{color: '#f59e0b', background: 'rgba(245,158,11,0.1)'}}>
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          <div className="stat-info">
            <h4>Sản Phẩm</h4>
            <h2>{stats.physicalProducts}</h2>
          </div>
        </div>
      </div>

      {/* Main Charts Area */}
      <div className="charts-grid">
        <div className="chart-card income-graphic">
          <div className="chart-header">
            <h3>Biểu đồ Doanh Thu</h3>
            <span className="subtitle">Thống kê theo tháng trong năm</span>
          </div>
          <div className="chart-body" style={{ height: '320px', marginTop: '20px' }}>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>

        <div className="side-column">
          <div className="chart-card distribution-graphic">
            <div className="chart-header">
              <h3>Phân bổ Sản phẩm</h3>
            </div>
            <div className="chart-body" style={{ height: '220px', marginTop: '10px' }}>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>

          <div className="chart-card small-stats-card">
            <div className="small-stat-item">
              <div className="icon" style={{background: 'rgba(99,102,241,0.1)', color: '#6366f1'}}>
                <FontAwesomeIcon icon={faTags} />
              </div>
              <div className="text">
                <span className="val">{stats.totalCategories}</span>
                <span className="lbl">Danh mục</span>
              </div>
            </div>
            <div className="small-stat-item">
              <div className="icon" style={{background: 'rgba(236,72,153,0.1)', color: '#ec4899'}}>
                <FontAwesomeIcon icon={faBlog} />
              </div>
              <div className="text">
                <span className="val">{stats.totalBlogs}</span>
                <span className="lbl">Bài viết</span>
              </div>
            </div>
            <div className="small-stat-item">
              <div className="icon" style={{background: 'rgba(14,165,233,0.1)', color: '#0ea5e9'}}>
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="text">
                <span className="val">{stats.totalPhotos}</span>
                <span className="lbl">Ảnh Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
