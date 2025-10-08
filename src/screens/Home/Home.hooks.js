import { useState } from 'react';
import { Alert } from 'react-native';
import { useDate } from '../../contexts/DateContext';

export const useHomeScreen = () => {
  const { 
    selectedPeriod, 
    setSelectedPeriod, 
    comparisonEnabled, 
    setComparisonEnabled 
  } = useDate();
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

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
    const recommendation = mergedRecommendations.find(r => r.id === id);
    setSelectedRecommendation(recommendation);
    setModalVisible(true);
  };

  const handleDismiss = (id) => {
    Alert.alert('Dismissed', `Recommendation ${id} has been dismissed.`);
  };

  const handleReplyPress = () => {
    Alert.alert('Reply', 'Reply to review feature');
  };

  const handleActivityView = () => {
    console.log('View activity details');
  };

  const businessActivityData = [
    { 
      label: 'Impressions', 
      value: '12.3K', 
      change: '+12%', 
      isPositive: true,
      icon: 'eye-outline'
    },
    { 
      label: 'Clicks', 
      value: '3.2K', 
      change: '+8%', 
      isPositive: true,
      icon: 'hand-left-outline'
    },
    { 
      label: 'Calls', 
      value: '234', 
      change: '-2%', 
      isPositive: false,
      icon: 'call-outline'
    },
    { 
      label: 'Directions', 
      value: '567', 
      change: '+15%', 
      isPositive: true,
      icon: 'navigate-outline'
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 150 },
    { stars: 4, count: 45 },
    { stars: 3, count: 20 },
    { stars: 2, count: 10 },
    { stars: 1, count: 5 },
  ];

  const mergedRecommendations = [
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
      title: 'Add business description',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'High',
      icon: 'warning',
      iconColor: '#EF4444'
    },
    {
      id: '3',
      title: 'Encourage more reviews',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'Medium',
      icon: 'bulb',
      iconColor: '#F59E0B'
    },
    {
      id: '4',
      title: 'Add 3 more photos',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'Medium',
      icon: 'bulb',
      iconColor: '#F59E0B'
    },
  ];

  const recentActivityData = [
    {
      id: '1',
      icon: 'star',
      title: 'New review received',
      timeAgo: '2 min ago',
      hasView: true
    },
    {
      id: '2',
      icon: 'trending-up',
      title: 'Ranking improved by 3 positions',
      timeAgo: '1 hour ago',
      hasView: false
    },
    {
      id: '3',
      icon: 'chatbubble',
      title: 'Response posted',
      timeAgo: '3 hours ago',
      hasView: true
    },
    {
      id: '4',
      icon: 'camera',
      title: 'New photo added',
      timeAgo: '5 hours ago',
      hasView: false
    },
  ];

  return {
    selectedPeriod,
    setSelectedPeriod,
    comparisonEnabled,
    setComparisonEnabled,
    modalVisible,
    setModalVisible,
    selectedRecommendation,
    setSelectedRecommendation,
    handleAlertsPress,
    handlePeriodChange,
    handleComparisonToggle,
    handleReadMore,
    handleDismiss,
    handleReplyPress,
    handleActivityView,
    businessActivityData,
    ratingBreakdown,
    mergedRecommendations,
    recentActivityData,
  };
};
