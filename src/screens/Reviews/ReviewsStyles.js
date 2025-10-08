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
  checkAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#2563EB',
    borderRadius: 6,
  },
  checkAllButtonText: {
    ...Typography.button,
    fontSize: 12,
    color: '#FFFFFF',
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  overviewLabel: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  overviewValue: {
    ...Typography.h2,
    fontSize: 24,
    color: '#111827',
  },
  overviewSubtext: {
    ...Typography.body,
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  sentimentSection: {
    marginBottom: 16,
  },
  sentimentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sentimentCard: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  sentimentLabel: {
    ...Typography.body,
    fontSize: 12,
    marginBottom: 4,
  },
  sentimentValue: {
    ...Typography.h3,
    fontSize: 20,
  },
  ratingDistribution: {
    marginBottom: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starLabel: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    width: 40,
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 4,
  },
  percentLabel: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    width: 35,
    textAlign: 'right',
  },
  recommendationCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    ...Typography.h3,
    fontSize: 16,
    color: '#111827',
    marginBottom: 8,
  },
  cardDescription: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readMoreButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#2563EB',
    borderRadius: 6,
  },
  readMoreButtonText: {
    ...Typography.button,
    fontSize: 14,
    color: '#FFFFFF',
  },
  dismissText: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    ...Typography.h2,
    fontSize: 18,
    color: '#111827',
    flex: 1,
  },
  closeButton: {
    padding: 4,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalDescription: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#2563EB',
    borderRadius: 8,
  },
  modalButtonText: {
    ...Typography.button,
    fontSize: 14,
    color: '#FFFFFF',
  },
});
