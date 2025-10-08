import { useState } from 'react';
import { Alert } from 'react-native';
import { useDate } from '../../contexts/DateContext';

export const useAuditScreen = () => {
  const { selectedPeriod, setSelectedPeriod, comparisonEnabled, setComparisonEnabled } = useDate();
  
  const [recommendations] = useState([
    {
      id: '1',
      title: 'Add business description',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'High',
      icon: 'warning',
      iconColor: '#EF4444'
    },
    {
      id: '2',
      title: 'Add 3 more photos',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'Medium',
      icon: 'bulb',
      iconColor: '#F59E0B'
    },
    {
      id: '3',
      title: 'Update business hours',
      description: 'Lorem ipsum dolor sit amet consectetur. Ultricies scelerisque netus est urna porttitor.',
      priority: 'Low',
      icon: 'bulb-outline',
      iconColor: '#10B981'
    }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

  const handleAlertsPress = () => {
    console.log('Alerts pressed');
  };

  const handleRerunAudit = () => {
    Alert.alert('Re-run Audit', 'Audit will be re-run now.');
  };

  const handleReadMore = (id) => {
    const recommendation = recommendations.find(r => r.id === id);
    setSelectedRecommendation(recommendation);
    setModalVisible(true);
  };

  const handleDismiss = (id) => {
    Alert.alert('Dismissed', `Recommendation ${id} has been dismissed.`);
  };

  const handleViewEditGoogle = () => {
    Alert.alert('View/Edit', 'Opening Google Business Profile...');
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    console.log('Date period changed to:', period);
  };

  const handleComparisonToggle = (enabled) => {
    setComparisonEnabled(enabled);
    console.log('Comparison mode:', enabled);
  };

  const businessSummaryData = [
    {
      category: 'Average Rating',
      value: '4.3',
      icon: 'star',
      color: '#F59E0B'
    },
    {
      category: 'Categories',
      value: '5',
      icon: 'grid',
      color: '#2563EB'
    },
    {
      category: 'Photos',
      value: '24',
      icon: 'camera',
      color: '#10B981'
    },
    {
      category: 'Reviews',
      value: '230',
      icon: 'chatbubbles',
      color: '#8B5CF6'
    },
    {
      category: 'Posts',
      value: '12',
      icon: 'newspaper',
      color: '#EC4899'
    },
    {
      category: 'Q&A',
      value: '8',
      icon: 'help-circle',
      color: '#F59E0B'
    }
  ];

  const businessActivityData = [
    {
      label: 'Profile Views',
      value: '12.3K',
      change: '+12%',
      isPositive: true
    },
    {
      label: 'Search Queries',
      value: '8.5K',
      change: '+8%',
      isPositive: true
    },
    {
      label: 'Website Clicks',
      value: '3.2K',
      change: '-2%',
      isPositive: false
    },
    {
      label: 'Direction Requests',
      value: '567',
      change: '+15%',
      isPositive: true
    }
  ];

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
    handleAlertsPress,
    handleRerunAudit,
    handleReadMore,
    handleDismiss,
    handleViewEditGoogle,
    handlePeriodChange,
    handleComparisonToggle,
    businessSummaryData,
    businessActivityData,
  };
};
