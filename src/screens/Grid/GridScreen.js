import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CommonHeader from '../../components/CommonHeader';
import DateFilter from '../../components/DateFilter';
import { useGridScreen } from './Grid.hooks';
import styles from './GridStyles';

export default function GridScreen() {
  const {
    selectedPeriod,
    comparisonEnabled,
    selectedKeyword,
    isKeywordDropdownVisible,
    setIsKeywordDropdownVisible,
    selectedTimeFilter,
    setSelectedTimeFilter,
    handleAlertsPress,
    handleKeywordSelect,
    handleViewFullGrid,
    handlePeriodChange,
    handleComparisonToggle,
    KEYWORDS,
    GRID_HISTORY,
  } = useGridScreen();

  const renderTimeFilter = (filter) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.timeFilterChip,
        selectedTimeFilter === filter && styles.activeTimeFilterChip
      ]}
      onPress={() => setSelectedTimeFilter(filter)}
    >
      <Text style={[
        styles.timeFilterText,
        selectedTimeFilter === filter && styles.activeTimeFilterText
      ]}>
        {filter}
      </Text>
    </TouchableOpacity>
  );

  const renderGridHistoryItem = (item, index) => (
    <View key={index} style={styles.historyItem}>
      <View style={styles.historyDot} />
      <Text style={styles.historyDate}>{item.date}</Text>
    </View>
  );

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
        
        <View style={styles.summaryBanner}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>Grid Ranking Summary</Text>
            <Text style={styles.lastRunDate}>Last run: Jun 19, 2025</Text>
          </View>
          
          <View style={styles.summaryStats}>
            <View style={styles.mainStat}>
              <Text style={styles.mainStatValue}>9.2</Text>
              <Text style={styles.mainStatLabel}>Average Grid Rank</Text>
              <Text style={styles.mainStatChange}>↑ 0.3 from last period</Text>
            </View>
            <View style={styles.secondaryStats}>
              <View style={styles.secondaryStat}>
                <Text style={styles.secondaryStatLabel}>Top Keyword</Text>
                <Text style={styles.secondaryStatValue}>8.5</Text>
              </View>
              <View style={styles.secondaryStat}>
                <Text style={styles.secondaryStatLabel}>Bottom Keyword</Text>
                <Text style={styles.secondaryStatValue}>9.8</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Select Keyword</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.keywordSelector}
            onPress={() => setIsKeywordDropdownVisible(true)}
          >
            <Text style={styles.keywordText}>{selectedKeyword}</Text>
            <Ionicons name="chevron-down" size={20} color="#6B7280" />
          </TouchableOpacity>

          <View style={styles.timeFilterRow}>
            {renderTimeFilter('All Time')}
            {renderTimeFilter('This Month')}
            {renderTimeFilter('This Week')}
          </View>

          <View style={styles.gridVisual}>
            <View style={styles.gridPlaceholder}>
              <Text style={styles.gridPlaceholderText}>Grid Map Visualization</Text>
              <Text style={styles.gridPlaceholderText}>5x5 Grid</Text>
            </View>
            <TouchableOpacity style={styles.viewFullButton} onPress={handleViewFullGrid}>
              <Text style={styles.viewFullButtonText}>View Full Grid</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ranking History</Text>
          </View>
          <View style={styles.historySection}>
            {GRID_HISTORY.map((item, index) => (
              <View key={index} style={styles.historyItem}>
                <View style={styles.historyDot} />
                <Text style={styles.historyDate}>{item.date}</Text>
                <Text style={styles.historyRank}>{item.rank}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={isKeywordDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsKeywordDropdownVisible(false)}
      >
        <View style={styles.keywordDropdownModal}>
          <View style={styles.dropdownContent}>
            <View style={styles.dropdownHeader}>
              <Text style={styles.dropdownTitle}>Select Keyword</Text>
              <TouchableOpacity onPress={() => setIsKeywordDropdownVisible(false)}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={KEYWORDS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    selectedKeyword === item && styles.selectedDropdownItem
                  ]}
                  onPress={() => handleKeywordSelect(item)}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    selectedKeyword === item && styles.selectedDropdownItemText
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
