import { useState } from 'react';
import { Alert } from 'react-native';
import { useDate } from '../../contexts/DateContext';

export const useReviewsScreen = () => {
  const { 
    selectedPeriod, 
    setSelectedPeriod, 
    comparisonEnabled, 
    setComparisonEnabled 
  } = useDate();
  
  const [recommendations] = useState([
    {
      id: '1',
      title: 'Respond to negative reviews',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'High',
      icon: 'warning',
      iconColor: '#EF4444'
    },
    {
      id: '2',
      title: 'Encourage more reviews',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'Medium',
      icon: 'bulb',
      iconColor: '#F59E0B'
    },
    {
      id: '3',
      title: 'Improve response time',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'Low',
      icon: 'bulb-outline',
      iconColor: '#10B981'
    }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleAlertsPress = () => {
    console.log('Alerts pressed');
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    console.log('Date period changed to:', period);
  };

  const handleComparisonToggle = (enabled) => {
    setComparisonEnabled(enabled);
    console.log('Comparison mode:', enabled);
  };

  const handleReadMore = (id) => {
    const recommendation = recommendations.find(r => r.id === id);
    setSelectedRecommendation(recommendation);
    setModalVisible(true);
  };

  const handleDismiss = (id) => {
    Alert.alert('Dismissed', `Recommendation ${id} has been dismissed.`);
  };

  const handleCheckAllReviews = () => {
    setShowAllReviews(true);
  };

  const handleBackToReviews = () => {
    setShowAllReviews(false);
  };

  const overviewData = {
    totalReviews: 230,
    averageRating: 4.3,
    totalReplies: 189,
    replyRate: '82%',
    sentimentBreakdown: {
      positive: 165,
      neutral: 45,
      negative: 20
    },
    ratingBreakdown: [
      { stars: 5, count: 150, percentage: 65 },
      { stars: 4, count: 45, percentage: 20 },
      { stars: 3, count: 20, percentage: 9 },
      { stars: 2, count: 10, percentage: 4 },
      { stars: 1, count: 5, percentage: 2 }
    ]
  };

  return {
    selectedPeriod,
    setSelectedPeriod,
    comparisonEnabled,
    setComparisonEnabled,
    recommendations,
    modalVisible,
    setModalVisible,
    selectedRecommendation,
    setSelectedRecommendation,
    showAllReviews,
    setShowAllReviews,
    handleAlertsPress,
    handlePeriodChange,
    handleComparisonToggle,
    handleReadMore,
    handleDismiss,
    handleCheckAllReviews,
    handleBackToReviews,
    overviewData,
  };
};
