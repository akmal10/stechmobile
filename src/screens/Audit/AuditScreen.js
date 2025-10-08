import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Svg, { Circle } from 'react-native-svg';
import CommonHeader from '../../components/CommonHeader';
import DateFilter from '../../components/DateFilter';
import { useAuditScreen } from './Audit.hooks';
import styles from './AuditStyles';

const CircularProgress = ({ score }) => {
  const size = 120;
  const strokeWidth = 12;
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
        <Text style={styles.scoreLabel}>Good</Text>
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
  onDismiss 
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

export default function AuditScreen() {
  const {
    selectedPeriod,
    comparisonEnabled,
    recommendations,
    modalVisible,
    setModalVisible,
    selectedRecommendation,
    handleAlertsPress,
    handleRerunAudit,
    handleReadMore,
    handleDismiss,
    handleViewEditGoogle,
    handlePeriodChange,
    handleComparisonToggle,
    businessSummaryData,
    businessActivityData,
  } = useAuditScreen();

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
            <Text style={styles.auditSubtitle}>
              Your business profile is in good standing
            </Text>
            <TouchableOpacity style={styles.rerunButton} onPress={handleRerunAudit}>
              <Text style={styles.rerunButtonText}>Re-run Audit</Text>
            </TouchableOpacity>
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

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Business Summary</Text>
          </View>
          <View style={styles.businessSummaryGrid}>
            {businessSummaryData.map((item, index) => (
              <View key={index} style={styles.summaryCard}>
                <View style={styles.summaryHeader}>
                  <View style={[styles.summaryIconContainer, { backgroundColor: item.color + '20' }]}>
                    <Ionicons name={item.icon} size={16} color={item.color} />
                  </View>
                  <Text style={styles.summaryCategory}>{item.category}</Text>
                </View>
                <Text style={styles.summaryValue}>{item.value}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.viewEditButton} onPress={handleViewEditGoogle}>
            <Text style={styles.viewEditButtonText}>View/Edit on Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Business Activity</Text>
          </View>
          <View style={styles.activityGrid}>
            {businessActivityData.map((item, index) => (
              <View key={index} style={styles.activityCard}>
                <Text style={styles.activityLabel}>{item.label}</Text>
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
