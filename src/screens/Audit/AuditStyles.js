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
  auditScoreSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  circularProgressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circularProgressText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreNumber: {
    ...Typography.h1,
    fontSize: 36,
    color: '#2563EB',
  },
  scoreLabel: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  auditTitle: {
    ...Typography.h3,
    fontSize: 16,
    color: '#111827',
    marginTop: 16,
  },
  auditSubtitle: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    textAlign: 'center',
  },
  rerunButton: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#2563EB',
    borderRadius: 8,
  },
  rerunButtonText: {
    ...Typography.button,
    fontSize: 14,
    color: '#FFFFFF',
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
  businessSummaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  summaryCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  summaryCategory: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    flex: 1,
  },
  summaryValue: {
    ...Typography.h2,
    fontSize: 24,
    color: '#111827',
  },
  viewEditButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  viewEditButtonText: {
    ...Typography.button,
    fontSize: 14,
    color: '#374151',
  },
  activityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  activityCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activityLabel: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  activityValue: {
    ...Typography.h2,
    fontSize: 20,
    color: '#111827',
    marginBottom: 4,
  },
  activityChange: {
    ...Typography.body,
    fontSize: 12,
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
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
