import { StyleSheet } from 'react-native';
import { Typography } from '../../constants/Typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  summaryBanner: {
    backgroundColor: '#EFF6FF',
    padding: 16,
    margin: 12,
    borderRadius: 8,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryTitle: {
    ...Typography.h3,
    fontSize: 16,
    color: '#1E40AF',
  },
  lastRunDate: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mainStat: {
    flex: 1,
  },
  mainStatValue: {
    ...Typography.h1,
    fontSize: 36,
    color: '#1E40AF',
  },
  mainStatLabel: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  mainStatChange: {
    ...Typography.body,
    fontSize: 12,
    color: '#10B981',
    marginTop: 4,
  },
  secondaryStats: {
    flex: 1,
    marginLeft: 16,
  },
  secondaryStat: {
    marginBottom: 12,
  },
  secondaryStatLabel: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  secondaryStatValue: {
    ...Typography.h3,
    fontSize: 18,
    color: '#1E40AF',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    ...Typography.h3,
    fontSize: 16,
    color: '#111827',
  },
  keywordSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },
  keywordText: {
    ...Typography.body,
    fontSize: 14,
    color: '#111827',
    flex: 1,
  },
  timeFilterRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timeFilterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    marginRight: 8,
  },
  activeTimeFilterChip: {
    backgroundColor: '#2563EB',
  },
  timeFilterText: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
  },
  activeTimeFilterText: {
    color: '#FFFFFF',
  },
  gridVisual: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  gridPlaceholder: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridPlaceholderText: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
  },
  viewFullButton: {
    marginTop: 12,
    paddingVertical: 10,
    backgroundColor: '#2563EB',
    borderRadius: 8,
    alignItems: 'center',
  },
  viewFullButtonText: {
    ...Typography.button,
    fontSize: 14,
    color: '#FFFFFF',
  },
  historySection: {
    marginBottom: 16,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderLeftWidth: 2,
    borderLeftColor: '#2563EB',
    paddingLeft: 12,
    marginBottom: 8,
  },
  historyDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563EB',
    marginRight: 8,
  },
  historyDate: {
    ...Typography.body,
    fontSize: 14,
    color: '#111827',
    flex: 1,
  },
  historyRank: {
    ...Typography.h3,
    fontSize: 16,
    color: '#2563EB',
  },
  keywordDropdownModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '80%',
    maxHeight: '60%',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  dropdownTitle: {
    ...Typography.h3,
    fontSize: 16,
    color: '#111827',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  selectedDropdownItem: {
    backgroundColor: '#EFF6FF',
  },
  dropdownItemText: {
    ...Typography.body,
    fontSize: 14,
    color: '#111827',
  },
  selectedDropdownItemText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
