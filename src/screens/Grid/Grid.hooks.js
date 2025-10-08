import { useState } from 'react';
import { Linking } from 'react-native';
import { useDate } from '../../contexts/DateContext';

const KEYWORDS = [
  'Restaurant near me',
  'Best pizza',
  'Italian food',
  'Delivery service',
  'Fine dining',
];

const GRID_HISTORY = [
  { date: 'Jun, 10 2025', rank: 8.5 },
  { date: 'Jun, 11 2025', rank: 9.1 },
  { date: 'Jun, 11 2025', rank: 9.3 },
  { date: 'Jun, 12 2025', rank: 9.2 },
  { date: 'Jun, 13 2025', rank: 9.29 },
];

export const useGridScreen = () => {
  const { selectedPeriod, setSelectedPeriod, comparisonEnabled, setComparisonEnabled } = useDate();
  const [selectedKeyword, setSelectedKeyword] = useState(KEYWORDS[0]);
  const [isKeywordDropdownVisible, setIsKeywordDropdownVisible] = useState(false);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('All Time');

  const handleAlertsPress = () => {
    console.log('Alerts pressed');
  };

  const handleKeywordSelect = (keyword) => {
    setSelectedKeyword(keyword);
    setIsKeywordDropdownVisible(false);
  };

  const handleViewFullGrid = () => {
    Linking.openURL('https://example.com/grid-view');
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    console.log('Date period changed to:', period);
  };

  const handleComparisonToggle = (enabled) => {
    setComparisonEnabled(enabled);
    console.log('Comparison mode:', enabled);
  };

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

  return {
    selectedPeriod,
    setSelectedPeriod,
    comparisonEnabled,
    setComparisonEnabled,
    selectedKeyword,
    setSelectedKeyword,
    isKeywordDropdownVisible,
    setIsKeywordDropdownVisible,
    selectedTimeFilter,
    setSelectedTimeFilter,
    handleAlertsPress,
    handleKeywordSelect,
    handleViewFullGrid,
    handlePeriodChange,
    handleComparisonToggle,
    renderTimeFilter,
    renderGridHistoryItem,
    KEYWORDS,
    GRID_HISTORY,
  };
};
