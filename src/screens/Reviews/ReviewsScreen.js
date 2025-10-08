import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CommonHeader from '../../components/CommonHeader';
import DateFilter from '../../components/DateFilter';
import AllReviewsScreen from '../AllReviews/AllReviewsScreen';
import { useReviewsScreen } from './Reviews.hooks';
import styles from './ReviewsStyles';

const RecommendationCard = ({
  id,
  title,
  description,
  priority,
  icon,
  iconColor,
  onReadMore,
  onDismiss,
}) => {
  return (
    <View style={styles.recommendationCard}>
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor + '20' }]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.readMoreButton} onPress={() => onReadMore(id)}>
          <Text style={styles.readMoreButtonText}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDismiss(id)}>
          <Text style={styles.dismissText}>dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ReviewsScreen() {
  const {
    selectedPeriod,
    comparisonEnabled,
    recommendations,
    modalVisible,
    setModalVisible,
    selectedRecommendation,
    showAllReviews,
    handleAlertsPress,
    handlePeriodChange,
    handleComparisonToggle,
    handleReadMore,
    handleDismiss,
    handleCheckAllReviews,
    handleBackToReviews,
    overviewData,
  } = useReviewsScreen();

  if (showAllReviews) {
    return <AllReviewsScreen onBack={handleBackToReviews} />;
  }

  return (
    <View style={styles.container}>
      <CommonHeader
        onAlertsPress={handleAlertsPress}
        alertsCount={3}
      />
      <DateFilter 
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
        comparisonEnabled={comparisonEnabled}
        onComparisonToggle={handleComparisonToggle}
      />
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <TouchableOpacity style={styles.checkAllButton} onPress={handleCheckAllReviews}>
              <Text style={styles.checkAllButtonText}>Check All Reviews</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.overviewGrid}>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewLabel}>Total Reviews</Text>
              <Text style={styles.overviewValue}>{overviewData.totalReviews}</Text>
            </View>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewLabel}>Average Rating</Text>
              <Text style={styles.overviewValue}>{overviewData.averageRating}</Text>
              <Text style={styles.overviewSubtext}>⭐ out of 5</Text>
            </View>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewLabel}>Total Replies</Text>
              <Text style={styles.overviewValue}>{overviewData.totalReplies}</Text>
            </View>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewLabel}>Reply Rate</Text>
              <Text style={styles.overviewValue}>{overviewData.replyRate}</Text>
            </View>
          </View>

          <View style={styles.sentimentSection}>
            <Text style={styles.sectionTitle}>Sentiment Analysis</Text>
            <View style={styles.sentimentRow}>
              <View style={[styles.sentimentCard, { backgroundColor: '#ECFDF5' }]}>
                <Text style={[styles.sentimentLabel, { color: '#059669' }]}>Positive</Text>
                <Text style={[styles.sentimentValue, { color: '#059669' }]}>
                  {overviewData.sentimentBreakdown.positive}
                </Text>
              </View>
              <View style={[styles.sentimentCard, { backgroundColor: '#FEF3C7' }]}>
                <Text style={[styles.sentimentLabel, { color: '#D97706' }]}>Neutral</Text>
                <Text style={[styles.sentimentValue, { color: '#D97706' }]}>
                  {overviewData.sentimentBreakdown.neutral}
                </Text>
              </View>
              <View style={[styles.sentimentCard, { backgroundColor: '#FEE2E2' }]}>
                <Text style={[styles.sentimentLabel, { color: '#DC2626' }]}>Negative</Text>
                <Text style={[styles.sentimentValue, { color: '#DC2626' }]}>
                  {overviewData.sentimentBreakdown.negative}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.ratingDistribution}>
            <Text style={styles.sectionTitle}>Rating Distribution</Text>
            {overviewData.ratingBreakdown.map((item) => (
              <View key={item.stars} style={styles.ratingRow}>
                <Text style={styles.starLabel}>{item.stars} ⭐</Text>
                <View style={styles.barContainer}>
                  <View style={[styles.barFill, { width: `${item.percentage}%` }]} />
                </View>
                <Text style={styles.percentLabel}>{item.percentage}%</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
          </View>
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              {...rec}
              onReadMore={handleReadMore}
              onDismiss={handleDismiss}
            />
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedRecommendation?.title}</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalDescription}>
                {selectedRecommendation?.description}
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Got it</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
