import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Svg, { Circle } from 'react-native-svg';
import CommonHeader from '../../components/CommonHeader';
import DateFilter from '../../components/DateFilter';
import { useHomeScreen } from './Home.hooks';
import styles from './HomeStyles';

const CircularProgress = ({ score }) => {
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (score / 100) * circumference;

  return (
    <View style={styles.circularProgressContainer}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2563EB"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.circularProgressText}>
        <Text style={styles.scoreNumber}>{score}</Text>
      </View>
    </View>
  );
};

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
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        <View style={[styles.priorityBadge, { backgroundColor: priority === 'High' ? '#FEE2E2' : priority === 'Medium' ? '#FEF3C7' : '#ECFDF5' }]}>
          <Text style={[styles.priorityText, { color: priority === 'High' ? '#DC2626' : priority === 'Medium' ? '#D97706' : '#059669' }]}>
            {priority}
          </Text>
        </View>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription} numberOfLines={2}>{description}</Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.readMoreButton} onPress={() => onReadMore(id)}>
          <Text style={styles.readMoreButtonText}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDismiss(id)}>
          <Text style={styles.dismissText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ActivityItem = ({ icon, title, timeAgo, onView }) => (
  <View style={styles.activityItem}>
    <View style={styles.activityIconContainer}>
      <Ionicons name={icon} size={16} color="#2563EB" />
    </View>
    <View style={styles.activityContent}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityTime}>{timeAgo}</Text>
    </View>
    {onView && (
      <TouchableOpacity onPress={onView} style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default function HomeScreen() {
  const {
    selectedPeriod,
    comparisonEnabled,
    modalVisible,
    setModalVisible,
    selectedRecommendation,
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
  } = useHomeScreen();

  const totalReviews = ratingBreakdown.reduce((sum, item) => sum + item.count, 0);
  const averageRating = (
    ratingBreakdown.reduce((sum, item) => sum + item.stars * item.count, 0) / totalReviews
  ).toFixed(1);

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
          <View style={styles.auditScoreSection}>
            <CircularProgress score={85} />
            <Text style={styles.auditTitle}>Business Audit Score</Text>
            <Text style={styles.auditSubtitle}>Good standing</Text>
            <TouchableOpacity style={styles.rerunButton}>
              <Text style={styles.rerunButtonText}>Re-run Audit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Business Activity</Text>
          </View>
          <View style={styles.activityGrid}>
            {businessActivityData.map((item, index) => (
              <View key={index} style={styles.activityCard}>
                <View style={styles.activityHeader}>
                  <View style={styles.activityIconContainer}>
                    <Ionicons name={item.icon} size={16} color="#2563EB" />
                  </View>
                  <Text style={styles.activityLabel}>{item.label}</Text>
                </View>
                <Text style={styles.activityValue}>{item.value}</Text>
                <Text style={[
                  styles.activityChange, 
                  item.isPositive ? styles.positiveChange : styles.negativeChange
                ]}>
                  {item.change}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Review Analytics</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="chevron-forward" size={16} color="#2563EB" />
            </TouchableOpacity>
          </View>
          <View style={styles.reviewSummary}>
            <View style={styles.reviewHeader}>
              <View style={styles.averageRating}>
                <Text style={styles.ratingNumber}>{averageRating}</Text>
                <View style={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons 
                      key={i} 
                      name={i < Math.floor(averageRating) ? "star" : "star-outline"} 
                      size={16} 
                      color="#F59E0B" 
                    />
                  ))}
                </View>
                <Text style={styles.totalReviews}>{totalReviews} reviews</Text>
              </View>
              <View style={styles.ratingBars}>
                {ratingBreakdown.map((item) => (
                  <View key={item.stars} style={styles.ratingRow}>
                    <Text style={styles.starLabel}>{item.stars}★</Text>
                    <View style={styles.barContainer}>
                      <View 
                        style={[
                          styles.barFill, 
                          { width: `${(item.count / totalReviews) * 100}%` }
                        ]} 
                      />
                    </View>
                    <Text style={styles.countLabel}>{item.count}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleReplyPress}>
              <Ionicons name="chatbubble-outline" size={16} color="#374151" />
              <Text style={styles.actionButtonText}>Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={16} color="#374151" />
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="analytics-outline" size={16} color="#374151" />
              <Text style={styles.actionButtonText}>Analyze</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Grid Ranking</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="chevron-forward" size={16} color="#2563EB" />
            </TouchableOpacity>
          </View>
          <View style={styles.rankingCard}>
            <View style={styles.rankingHeader}>
              <Text style={styles.rankingTitle}>Average Grid Rank</Text>
            </View>
            <Text style={styles.rankingValue}>9.2</Text>
            <Text style={styles.rankingChange}>↑ 0.3 from last period</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="chevron-forward" size={16} color="#2563EB" />
            </TouchableOpacity>
          </View>
          {mergedRecommendations.slice(0, 2).map((rec) => (
            <RecommendationCard
              key={rec.id}
              {...rec}
              onReadMore={handleReadMore}
              onDismiss={handleDismiss}
            />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
          </View>
          <View style={styles.activityList}>
            {recentActivityData.map((activity) => (
              <ActivityItem
                key={activity.id}
                icon={activity.icon}
                title={activity.title}
                timeAgo={activity.timeAgo}
                onView={activity.hasView ? handleActivityView : null}
              />
            ))}
          </View>
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
