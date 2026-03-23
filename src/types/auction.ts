import type { AuctionStatus, AuctionType, AutoBidStatus, BidStatus, SealedBidStatus } from './enums'
import type { MoneyDto } from './api'

export interface AuctionDto {
  id: string
  itemId: string
  sellerId: string
  auctionType: AuctionType
  startingPrice: MoneyDto
  reservePrice?: MoneyDto
  buyNowPrice?: MoneyDto
  currentPrice: MoneyDto
  bidIncrement: MoneyDto
  minimumBidAmount: MoneyDto
  isReserveMet: boolean
  hasBuyNow: boolean
  isBuyNowReserved: boolean
  buyNowReservedUntil?: string
  remainingTime?: string
  isEndingSoon: boolean
  currency: string
  startTime?: string
  endTime?: string
  actualEndTime?: string
  status: AuctionStatus
  currentWinnerId?: string
  autoExtend: boolean
  extensionMinutes: number
  extensionCount: number
  isFeatured: boolean
  priority: number
  viewCount: number
  bidCount: number
  watchCount: number
  qualificationStartAt?: string
  qualificationEndAt?: string
  assignedAdminId?: string
  assignedAt?: string
  priorityReason?: string
  verifyByPlatform: boolean
  rejectionCount: number
  createdAt: string
}

export interface AuctionDetailDto {
  auction: AuctionDto
  item: AuctionItemDto
  recentBids: BidDto[]
  priceHistory: PriceHistoryPoint[]
}

export interface AuctionItemDto {
  id: string
  sellerId: string
  categoryId?: string
  title: string
  description?: string
  condition: string
  status: string
  quantity: number
  images: AuctionItemMediaDto[]
  createdAt: string
}

export interface AuctionItemMediaDto {
  url: string
  thumbnailUrl?: string
  isPrimary: boolean
}

export interface AuctionListItemDto {
  id: string
  itemTitle: string
  primaryImageUrl?: string
  currentPrice: MoneyDto
  startingPrice: MoneyDto
  buyNowPrice?: MoneyDto
  isBuyNowReserved: boolean
  currency: string
  status: AuctionStatus
  auctionType?: AuctionType
  bidCount: number
  watchCount: number
  startTime?: string
  endTime?: string
  remainingTime?: string
  isEndingSoon: boolean
  isFeatured: boolean
  sellerId: string
}

export interface BidDto {
  id: string
  auctionId: string
  bidderId: string
  amount: MoneyDto
  isAutoBid: boolean
  status: BidStatus
  createdAt: string
}

export interface AutoBidDto {
  id: string
  auctionId: string
  bidderId: string
  isEnabled: boolean
  maxAmount: MoneyDto
  currentAmount: MoneyDto
  remainingBudget: MoneyDto
  incrementAmount?: MoneyDto
  status: AutoBidStatus
  totalAutoBids: number
  lastAutoBidAt?: string
  stopReason?: string
  stoppedAt?: string
  lastValidationAt?: string
  createdAt: string
}

export interface SealedBidDto {
  id: string
  auctionId: string
  bidderId: string
  encryptedAmount: string
  status: SealedBidStatus
  createdAt: string
}

export interface WinnerOfferDto {
  id: string
  offeredPrice: number
  status: string
  expiresAt: string
  createdAt: string
}

export interface PriceHistoryPoint {
  timestamp: string
  price: number
}

// SignalR notification types
export interface BidNotification {
  auctionId: string
  bidId: string
  bidderId: string
  bidderDisplayName: string
  amount: number
  currentPrice: number
  minimumNextBid: number
  currency: string
  totalBids: number
  isAutoBid: boolean
  timestamp: string
}

export interface OutbidNotification {
  auctionId: string
  newHighAmount: number
  minimumNextBid: number
  newHighBidderDisplayName: string
}

export interface AuctionStartedNotification {
  auctionId: string
  startTime: string
  endTime: string
}

export interface AuctionEndedNotification {
  auctionId: string
  winnerId?: string
  winnerDisplayName?: string
  finalPrice: number
  currency: string
  totalBids: number
  reserveMet: boolean
}

export interface AuctionExtendedNotification {
  auctionId: string
  newEndTime: string
  extensionMinutes: number
}

export interface AuctionCancelledNotification {
  auctionId: string
  reason: string
}

export interface PriceUpdateNotification {
  auctionId: string
  currentPrice: number
  minimumNextBid: number
  totalBids: number
  remainingTime?: string
  currency: string
}

export interface BuyNowReservedNotification {
  auctionId: string
  reservationId: string
  buyerId: string
  buyNowPrice: number
  depositAppliedAmount: number
  amountDue: number
  expiresAt: string
}

export interface BuyNowReservationReleasedNotification {
  auctionId: string
  reservationId: string
  buyerId: string
  reason: string
  releasedAt: string
}

export interface BuyNowNotification {
  auctionId: string
  buyerId: string
  price: number
  currency: string
}

export interface BuyNowCheckoutDto {
  reservationId: string
  paymentUrl: string
  expiresAt: string
  buyNowPrice: MoneyDto
  depositAppliedAmount: MoneyDto
  amountDue: MoneyDto
}

export interface ItemQuestionNotification {
  itemId: string
  questionId: string
  askerId: string
  askerDisplayName: string
  question: string
  answer?: string
  isPublic: boolean
  createdAt: string
}

export interface HubErrorNotification {
  code: string
  message: string
  errors?: Record<string, string[]>
}

// Filters
export interface AuctionFilterParams {
  search?: string
  categoryId?: string
  status?: AuctionStatus
  auctionType?: AuctionType
  minPrice?: number
  maxPrice?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  pageNumber?: number
  pageSize?: number
}
