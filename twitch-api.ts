import type { components, operations } from './twitch-api.generated';

type Schema<T extends keyof components['schemas']> = components['schemas'][T];
type ParamsSchema<T extends keyof operations> =
  operations[T] extends { parameters: { query?: infer Q } }
    ? Q
    : never;

export type GetAdScheduleParams = ParamsSchema<'get-ad-schedule'>;
export type SnoozeNextAdParams = ParamsSchema<'snooze-next-ad'>;
export type GetExtensionAnalyticsParams = ParamsSchema<'get-extension-analytics'>;
export type GetGameAnalyticsParams = ParamsSchema<'get-game-analytics'>;
export type GetBitsLeaderboardParams = ParamsSchema<'get-bits-leaderboard'>;
export type GetCheermotesParams = ParamsSchema<'get-cheermotes'>;
export type GetExtensionTransactionsParams = ParamsSchema<'get-extension-transactions'>;
export type GetChannelInformationParams = ParamsSchema<'get-channel-information'>;
export type ModifyChannelInformationParams = ParamsSchema<'modify-channel-information'>;
export type GetChannelEditorsParams = ParamsSchema<'get-channel-editors'>;
export type GetFollowedChannelsParams = ParamsSchema<'get-followed-channels'>;
export type GetChannelFollowersParams = ParamsSchema<'get-channel-followers'>;
export type CreateCustomRewardsParams = ParamsSchema<'create-custom-rewards'>;
export type DeleteCustomRewardParams = ParamsSchema<'delete-custom-reward'>;
export type GetCustomRewardParams = ParamsSchema<'get-custom-reward'>;
export type UpdateCustomRewardParams = ParamsSchema<'update-custom-reward'>;
export type GetCustomRewardRedemptionParams = ParamsSchema<'get-custom-reward-redemption'>;
export type UpdateRedemptionStatusParams = ParamsSchema<'update-redemption-status'>;
export type GetCharityCampaignParams = ParamsSchema<'get-charity-campaign'>;
export type GetCharityCampaignDonationsParams = ParamsSchema<'get-charity-campaign-donations'>;
export type GetChattersParams = ParamsSchema<'get-chatters'>;
export type GetChannelEmotesParams = ParamsSchema<'get-channel-emotes'>;
export type GetEmoteSetsParams = ParamsSchema<'get-emote-sets'>;
export type GetChannelChatBadgesParams = ParamsSchema<'get-channel-chat-badges'>;
export type GetChatSettingsParams = ParamsSchema<'get-chat-settings'>;
export type UpdateChatSettingsParams = ParamsSchema<'update-chat-settings'>;
export type SendChatAnnouncementParams = ParamsSchema<'send-chat-announcement'>;
export type SendShoutoutParams = ParamsSchema<'send-a-shoutout'>;
export type GetUserChatColorParams = ParamsSchema<'get-user-chat-color'>;
export type UpdateUserChatColorParams = ParamsSchema<'update-user-chat-color'>;
export type CreateClipParams = ParamsSchema<'create-clip'>;
export type GetClipsParams = ParamsSchema<'get-clips'>;
export type GetContentClassificationLabelsParams = ParamsSchema<'get-content-classification-labels'>;
export type GetDropsEntitlementsParams = ParamsSchema<'get-drops-entitlements'>;
export type GetExtensionConfigurationSegmentParams = ParamsSchema<'get-extension-configuration-segment'>;
export type SetExtensionRequiredConfigurationParams = ParamsSchema<'set-extension-required-configuration'>;
export type GetExtensionLiveChannelsParams = ParamsSchema<'get-extension-live-channels'>;
export type CreateExtensionSecretParams = ParamsSchema<'create-extension-secret'>;
export type SendExtensionChatMessageParams = ParamsSchema<'send-extension-chat-message'>;
export type GetExtensionsParams = ParamsSchema<'get-extensions'>;
export type GetReleasedExtensionsParams = ParamsSchema<'get-released-extensions'>;
export type GetExtensionBitsProductsParams = ParamsSchema<'get-extension-bits-products'>;
export type DeleteEventSubSubscriptionParams = ParamsSchema<'delete-eventsub-subscription'>;
export type GetEventSubSubscriptionsParams = ParamsSchema<'get-eventsub-subscriptions'>;
export type GetTopGamesParams = ParamsSchema<'get-top-games'>;
export type GetGamesParams = ParamsSchema<'get-games'>;
export type GetCreatorGoalsParams = ParamsSchema<'get-creator-goals'>;
export type GetChannelGuestStarSettingsParams = ParamsSchema<'get-channel-guest-star-settings'>;
export type UpdateChannelGuestStarSettingsParams = ParamsSchema<'update-channel-guest-star-settings'>;
export type GetGuestStarSessionParams = ParamsSchema<'get-guest-star-session'>;
export type CreateGuestStarSessionParams = ParamsSchema<'create-guest-star-session'>;
export type EndGuestStarSessionParams = ParamsSchema<'end-guest-star-session'>;
export type GetGuestStarInvitesParams = ParamsSchema<'get-guest-star-invites'>;
export type SendGuestStarInviteParams = ParamsSchema<'send-guest-star-invite'>;
export type DeleteGuestStarInviteParams = ParamsSchema<'delete-guest-star-invite'>;
export type AssignGuestStarSlotParams = ParamsSchema<'assign-guest-star-slot'>;
export type UpdateGuestStarSlotParams = ParamsSchema<'update-guest-star-slot'>;
export type DeleteGuestStarSlotParams = ParamsSchema<'delete-guest-star-slot'>;
export type UpdateGuestStarSlotSettingsParams = ParamsSchema<'update-guest-star-slot-settings'>;
export type GetHypeTrainEventsParams = ParamsSchema<'get-hype-train-events'>;
export type CheckAutoModStatusParams = ParamsSchema<'check-automod-status'>;
export type GetAutoModSettingsParams = ParamsSchema<'get-automod-settings'>;
export type UpdateAutoModSettingsParams = ParamsSchema<'update-automod-settings'>;
export type GetBannedUsersParams = ParamsSchema<'get-banned-users'>;
export type BanUserParams = ParamsSchema<'ban-user'>;
export type UnbanUserParams = ParamsSchema<'unban-user'>;
export type GetBlockedTermsParams = ParamsSchema<'get-blocked-terms'>;
export type AddBlockedTermParams = ParamsSchema<'add-blocked-term'>;
export type RemoveBlockedTermParams = ParamsSchema<'remove-blocked-term'>;
export type DeleteChatMessagesParams = ParamsSchema<'delete-chat-messages'>;
export type GetModeratedChannelsParams = ParamsSchema<'get-moderated-channels'>;
export type GetModeratorsParams = ParamsSchema<'get-moderators'>;
export type AddChannelModeratorParams = ParamsSchema<'add-channel-moderator'>;
export type RemoveChannelModeratorParams = ParamsSchema<'remove-channel-moderator'>;
export type GetVIPsParams = ParamsSchema<'get-vips'>;
export type AddChannelVIPParams = ParamsSchema<'add-channel-vip'>;
export type RemoveChannelVIPParams = ParamsSchema<'remove-channel-vip'>;
export type UpdateShieldModeStatusParams = ParamsSchema<'update-shield-mode-status'>;
export type GetShieldModeStatusParams = ParamsSchema<'get-shield-mode-status'>;
export type GetPollsParams = ParamsSchema<'get-polls'>;
export type GetPredictionsParams = ParamsSchema<'get-predictions'>;
export type StartRaidParams = ParamsSchema<'start-a-raid'>;
export type CancelRaidParams = ParamsSchema<'cancel-a-raid'>;
export type GetChannelStreamScheduleParams = ParamsSchema<'get-channel-stream-schedule'>;
export type GetChannelICalendarParams = ParamsSchema<'get-channel-icalendar'>;
export type UpdateChannelStreamScheduleParams = ParamsSchema<'update-channel-stream-schedule'>;
export type CreateChannelStreamScheduleSegmentParams = ParamsSchema<'create-channel-stream-schedule-segment'>;
export type UpdateChannelStreamScheduleSegmentParams = ParamsSchema<'update-channel-stream-schedule-segment'>;
export type DeleteChannelStreamScheduleSegmentParams = ParamsSchema<'delete-channel-stream-schedule-segment'>;
export type SearchCategoriesParams = ParamsSchema<'search-categories'>;
export type SearchChannelsParams = ParamsSchema<'search-channels'>;
export type GetStreamKeyParams = ParamsSchema<'get-stream-key'>;
export type GetStreamsParams = ParamsSchema<'get-streams'>;
export type GetFollowedStreamsParams = ParamsSchema<'get-followed-streams'>;
export type GetStreamMarkersParams = ParamsSchema<'get-stream-markers'>;
export type GetBroadcasterSubscriptionsParams = ParamsSchema<'get-broadcaster-subscriptions'>;
export type CheckUserSubscriptionParams = ParamsSchema<'check-user-subscription'>;
export type GetAllStreamTagsParams = ParamsSchema<'get-all-stream-tags'>;
export type GetStreamTagsParams = ParamsSchema<'get-stream-tags'>;
export type GetChannelTeamsParams = ParamsSchema<'get-channel-teams'>;
export type GetTeamsParams = ParamsSchema<'get-teams'>;
export type GetUsersParams = ParamsSchema<'get-users'>;
export type UpdateUserParams = ParamsSchema<'update-user'>;
export type GetUserBlockListParams = ParamsSchema<'get-user-block-list'>;
export type BlockUserParams = ParamsSchema<'block-user'>;
export type UnblockUserParams = ParamsSchema<'unblock-user'>;
export type GetUserActiveExtensionsParams = ParamsSchema<'get-user-active-extensions'>;
export type GetVideosParams = ParamsSchema<'get-videos'>;
export type DeleteVideosParams = ParamsSchema<'delete-videos'>;
export type SendWhisperParams = ParamsSchema<'send-whisper'>;
export type StartCommercialBody = Schema<'StartCommercialBody'>;
export type StartCommercialResponse = Schema<'StartCommercialResponse'>;
export type GetAdScheduleResponse = Schema<'GetAdScheduleResponse'>;
export type SnoozeNextAdResponse = Schema<'SnoozeNextAdResponse'>;
export type ExtensionAnalytics = Schema<'ExtensionAnalytics'>;
export type GetExtensionAnalyticsResponse = Schema<'GetExtensionAnalyticsResponse'>;
export type GameAnalytics = Schema<'GameAnalytics'>;
export type GetGameAnalyticsResponse = Schema<'GetGameAnalyticsResponse'>;
export type BitsLeaderboard = Schema<'BitsLeaderboard'>;
export type GetBitsLeaderboardResponse = Schema<'GetBitsLeaderboardResponse'>;
export type CheermoteImageFormat = Schema<'CheermoteImageFormat'>;
export type CheermoteImageTheme = Schema<'CheermoteImageTheme'>;
export type CheermoteImages = Schema<'CheermoteImages'>;
export type Cheermote = Schema<'Cheermote'>;
export type GetCheermotesResponse = Schema<'GetCheermotesResponse'>;
export type ExtensionTransaction = Schema<'ExtensionTransaction'>;
export type GetExtensionTransactionsResponse = Schema<'GetExtensionTransactionsResponse'>;
export type ChannelInformation = Schema<'ChannelInformation'>;
export type GetChannelInformationResponse = Schema<'GetChannelInformationResponse'>;
export type ModifyChannelInformationBody = Schema<'ModifyChannelInformationBody'>;
export type ChannelEditor = Schema<'ChannelEditor'>;
export type GetChannelEditorsResponse = Schema<'GetChannelEditorsResponse'>;
export type GetFollowedChannelsResponse = Schema<'GetFollowedChannelsResponse'>;
export type GetChannelFollowersResponse = Schema<'GetChannelFollowersResponse'>;
export type CreateCustomRewardsBody = Schema<'CreateCustomRewardsBody'>;
export type CustomReward = Schema<'CustomReward'>;
export type CreateCustomRewardsResponse = Schema<'CreateCustomRewardsResponse'>;
export type GetCustomRewardResponse = Schema<'GetCustomRewardResponse'>;
export type CustomRewardRedemption = Schema<'CustomRewardRedemption'>;
export type GetCustomRewardRedemptionResponse = Schema<'GetCustomRewardRedemptionResponse'>;
export type UpdateCustomRewardBody = Schema<'UpdateCustomRewardBody'>;
export type UpdateCustomRewardResponse = Schema<'UpdateCustomRewardResponse'>;
export type UpdateRedemptionStatusBody = Schema<'UpdateRedemptionStatusBody'>;
export type UpdateRedemptionStatusResponse = Schema<'UpdateRedemptionStatusResponse'>;
export type CharityCampaign = Schema<'CharityCampaign'>;
export type GetCharityCampaignResponse = Schema<'GetCharityCampaignResponse'>;
export type CharityCampaignDonation = Schema<'CharityCampaignDonation'>;
export type GetCharityCampaignDonationsResponse = Schema<'GetCharityCampaignDonationsResponse'>;
export type Chatter = Schema<'Chatter'>;
export type GetChattersResponse = Schema<'GetChattersResponse'>;
export type ChannelEmote = Schema<'ChannelEmote'>;
export type GetChannelEmotesResponse = Schema<'GetChannelEmotesResponse'>;
export type GlobalEmote = Schema<'GlobalEmote'>;
export type GetGlobalEmotesResponse = Schema<'GetGlobalEmotesResponse'>;
export type Emote = Schema<'Emote'>;
export type GetEmoteSetsResponse = Schema<'GetEmoteSetsResponse'>;
export type ChatBadge = Schema<'ChatBadge'>;
export type GetChannelChatBadgesResponse = Schema<'GetChannelChatBadgesResponse'>;
export type GetGlobalChatBadgesResponse = Schema<'GetGlobalChatBadgesResponse'>;
export type ChatSettings = Schema<'ChatSettings'>;
export type GetChatSettingsResponse = Schema<'GetChatSettingsResponse'>;
export type UpdateChatSettingsBody = Schema<'UpdateChatSettingsBody'>;
export type ChatSettingsUpdated = Schema<'ChatSettingsUpdated'>;
export type UpdateChatSettingsResponse = Schema<'UpdateChatSettingsResponse'>;
export type SendChatAnnouncementBody = Schema<'SendChatAnnouncementBody'>;
export type UserChatColor = Schema<'UserChatColor'>;
export type GetUserChatColorResponse = Schema<'GetUserChatColorResponse'>;
export type CreateClipResponse = Schema<'CreateClipResponse'>;
export type Clip = Schema<'Clip'>;
export type GetClipsResponse = Schema<'GetClipsResponse'>;
export type ContentClassificationLabel = Schema<'ContentClassificationLabel'>;
export type GetContentClassificationLabelsResponse = Schema<'GetContentClassificationLabelsResponse'>;
export type DropsEntitlement = Schema<'DropsEntitlement'>;
export type GetDropsEntitlementsResponse = Schema<'GetDropsEntitlementsResponse'>;
export type UpdateDropsEntitlementsBody = Schema<'UpdateDropsEntitlementsBody'>;
export type DropsEntitlementUpdated = Schema<'DropsEntitlementUpdated'>;
export type UpdateDropsEntitlementsResponse = Schema<'UpdateDropsEntitlementsResponse'>;
export type ExtensionConfigurationSegment = Schema<'ExtensionConfigurationSegment'>;
export type GetExtensionConfigurationSegmentResponse = Schema<'GetExtensionConfigurationSegmentResponse'>;
export type SetExtensionConfigurationSegmentBody = Schema<'SetExtensionConfigurationSegmentBody'>;
export type SetExtensionRequiredConfigurationBody = Schema<'SetExtensionRequiredConfigurationBody'>;
export type SendExtensionPubSubMessageBody = Schema<'SendExtensionPubSubMessageBody'>;
export type ExtensionLiveChannel = Schema<'ExtensionLiveChannel'>;
export type GetExtensionLiveChannelsResponse = Schema<'GetExtensionLiveChannelsResponse'>;
export type ExtensionSecret = Schema<'ExtensionSecret'>;
export type GetExtensionSecretsResponse = Schema<'GetExtensionSecretsResponse'>;
export type CreateExtensionSecretResponse = Schema<'CreateExtensionSecretResponse'>;
export type SendExtensionChatMessageBody = Schema<'SendExtensionChatMessageBody'>;
export type ExtensionIconUrls = Schema<'ExtensionIconUrls'>;
export type Extension = Schema<'Extension'>;
export type GetExtensionsResponse = Schema<'GetExtensionsResponse'>;
export type GetReleasedExtensionsResponse = Schema<'GetReleasedExtensionsResponse'>;
export type ExtensionBitsProduct = Schema<'ExtensionBitsProduct'>;
export type GetExtensionBitsProductsResponse = Schema<'GetExtensionBitsProductsResponse'>;
export type UpdateExtensionBitsProductBody = Schema<'UpdateExtensionBitsProductBody'>;
export type UpdateExtensionBitsProductResponse = Schema<'UpdateExtensionBitsProductResponse'>;
export type CreateEventSubSubscriptionBody = Schema<'CreateEventSubSubscriptionBody'>;
export type EventSubSubscription = Schema<'EventSubSubscription'>;
export type CreateEventSubSubscriptionResponse = Schema<'CreateEventSubSubscriptionResponse'>;
export type GetEventSubSubscriptionsResponse = Schema<'GetEventSubSubscriptionsResponse'>;
export type Game = Schema<'Game'>;
export type GetTopGamesResponse = Schema<'GetTopGamesResponse'>;
export type GetGamesResponse = Schema<'GetGamesResponse'>;
export type CreatorGoal = Schema<'CreatorGoal'>;
export type GetCreatorGoalsResponse = Schema<'GetCreatorGoalsResponse'>;
export type GetChannelGuestStarSettingsResponse = Schema<'GetChannelGuestStarSettingsResponse'>;
export type UpdateChannelGuestStarSettingsBody = Schema<'UpdateChannelGuestStarSettingsBody'>;
export type GuestStarSession = Schema<'GuestStarSession'>;
export type GetGuestStarSessionResponse = Schema<'GetGuestStarSessionResponse'>;
export type CreateGuestStarSessionResponse = Schema<'CreateGuestStarSessionResponse'>;
export type EndGuestStarSessionResponse = Schema<'EndGuestStarSessionResponse'>;
export type GuestStarInvite = Schema<'GuestStarInvite'>;
export type GetGuestStarInvitesResponse = Schema<'GetGuestStarInvitesResponse'>;
export type HypeTrainEvent = Schema<'HypeTrainEvent'>;
export type GetHypeTrainEventsResponse = Schema<'GetHypeTrainEventsResponse'>;
export type CheckAutoModStatusBody = Schema<'CheckAutoModStatusBody'>;
export type AutoModStatus = Schema<'AutoModStatus'>;
export type CheckAutoModStatusResponse = Schema<'CheckAutoModStatusResponse'>;
export type ManageHeldAutoModMessagesBody = Schema<'ManageHeldAutoModMessagesBody'>;
export type AutoModSettings = Schema<'AutoModSettings'>;
export type GetAutoModSettingsResponse = Schema<'GetAutoModSettingsResponse'>;
export type UpdateAutoModSettingsBody = Schema<'UpdateAutoModSettingsBody'>;
export type UpdateAutoModSettingsResponse = Schema<'UpdateAutoModSettingsResponse'>;
export type BannedUser = Schema<'BannedUser'>;
export type GetBannedUsersResponse = Schema<'GetBannedUsersResponse'>;
export type BanUserBody = Schema<'BanUserBody'>;
export type BanUserResponse = Schema<'BanUserResponse'>;
export type BlockedTerm = Schema<'BlockedTerm'>;
export type GetBlockedTermsResponse = Schema<'GetBlockedTermsResponse'>;
export type AddBlockedTermBody = Schema<'AddBlockedTermBody'>;
export type AddBlockedTermResponse = Schema<'AddBlockedTermResponse'>;
export type GetModeratedChannelsResponse = Schema<'GetModeratedChannelsResponse'>;
export type UserModerator = Schema<'UserModerator'>;
export type GetModeratorsResponse = Schema<'GetModeratorsResponse'>;
export type UserVip = Schema<'UserVip'>;
export type GetVIPsResponse = Schema<'GetVIPsResponse'>;
export type UpdateShieldModeStatusBody = Schema<'UpdateShieldModeStatusBody'>;
export type UpdateShieldModeStatusResponse = Schema<'UpdateShieldModeStatusResponse'>;
export type GetShieldModeStatusResponse = Schema<'GetShieldModeStatusResponse'>;
export type Poll = Schema<'Poll'>;
export type GetPollsResponse = Schema<'GetPollsResponse'>;
export type CreatePollBody = Schema<'CreatePollBody'>;
export type CreatePollResponse = Schema<'CreatePollResponse'>;
export type EndPollBody = Schema<'EndPollBody'>;
export type EndPollResponse = Schema<'EndPollResponse'>;
export type PredictionOutcome = Schema<'PredictionOutcome'>;
export type Prediction = Schema<'Prediction'>;
export type GetPredictionsResponse = Schema<'GetPredictionsResponse'>;
export type CreatePredictionBody = Schema<'CreatePredictionBody'>;
export type CreatePredictionResponse = Schema<'CreatePredictionResponse'>;
export type EndPredictionBody = Schema<'EndPredictionBody'>;
export type EndPredictionResponse = Schema<'EndPredictionResponse'>;
export type StartRaidResponse = Schema<'StartRaidResponse'>;
export type ChannelStreamScheduleSegment = Schema<'ChannelStreamScheduleSegment'>;
export type GetChannelStreamScheduleResponse = Schema<'GetChannelStreamScheduleResponse'>;
export type CreateChannelStreamScheduleSegmentBody = Schema<'CreateChannelStreamScheduleSegmentBody'>;
export type CreateChannelStreamScheduleSegmentResponse = Schema<'CreateChannelStreamScheduleSegmentResponse'>;
export type UpdateChannelStreamScheduleSegmentBody = Schema<'UpdateChannelStreamScheduleSegmentBody'>;
export type UpdateChannelStreamScheduleSegmentResponse = Schema<'UpdateChannelStreamScheduleSegmentResponse'>;
export type Category = Schema<'Category'>;
export type SearchCategoriesResponse = Schema<'SearchCategoriesResponse'>;
export type Channel = Schema<'Channel'>;
export type SearchChannelsResponse = Schema<'SearchChannelsResponse'>;
export type GetStreamKeyResponse = Schema<'GetStreamKeyResponse'>;
export type Stream = Schema<'Stream'>;
export type GetStreamsResponse = Schema<'GetStreamsResponse'>;
export type GetFollowedStreamsResponse = Schema<'GetFollowedStreamsResponse'>;
export type CreateStreamMarkerBody = Schema<'CreateStreamMarkerBody'>;
export type StreamMarkerCreated = Schema<'StreamMarkerCreated'>;
export type CreateStreamMarkerResponse = Schema<'CreateStreamMarkerResponse'>;
export type StreamMarkers = Schema<'StreamMarkers'>;
export type GetStreamMarkersResponse = Schema<'GetStreamMarkersResponse'>;
export type BroadcasterSubscription = Schema<'BroadcasterSubscription'>;
export type GetBroadcasterSubscriptionsResponse = Schema<'GetBroadcasterSubscriptionsResponse'>;
export type UserSubscription = Schema<'UserSubscription'>;
export type CheckUserSubscriptionResponse = Schema<'CheckUserSubscriptionResponse'>;
export type StreamTag = Schema<'StreamTag'>;
export type GetAllStreamTagsResponse = Schema<'GetAllStreamTagsResponse'>;
export type GetStreamTagsResponse = Schema<'GetStreamTagsResponse'>;
export type ChannelTeam = Schema<'ChannelTeam'>;
export type GetChannelTeamsResponse = Schema<'GetChannelTeamsResponse'>;
export type Team = Schema<'Team'>;
export type GetTeamsResponse = Schema<'GetTeamsResponse'>;
export type User = Schema<'User'>;
export type GetUsersResponse = Schema<'GetUsersResponse'>;
export type UpdateUserResponse = Schema<'UpdateUserResponse'>;
export type UserBlockList = Schema<'UserBlockList'>;
export type GetUserBlockListResponse = Schema<'GetUserBlockListResponse'>;
export type UserExtension = Schema<'UserExtension'>;
export type GetUserExtensionsResponse = Schema<'GetUserExtensionsResponse'>;
export type UserExtensionPanel = Schema<'UserExtensionPanel'>;
export type UserExtensionPanelUpdate = Schema<'UserExtensionPanelUpdate'>;
export type UserExtensionOverlay = Schema<'UserExtensionOverlay'>;
export type UserExtensionOverlayUpdate = Schema<'UserExtensionOverlayUpdate'>;
export type UserExtensionComponent = Schema<'UserExtensionComponent'>;
export type UserExtensionComponentUpdate = Schema<'UserExtensionComponentUpdate'>;
export type GetUserActiveExtensionsResponse = Schema<'GetUserActiveExtensionsResponse'>;
export type UpdateUserExtensionsBody = Schema<'UpdateUserExtensionsBody'>;
export type UpdateUserExtensionsResponse = Schema<'UpdateUserExtensionsResponse'>;
export type Video = Schema<'Video'>;
export type GetVideosResponse = Schema<'GetVideosResponse'>;
export type DeleteVideosResponse = Schema<'DeleteVideosResponse'>;
export type SendWhisperBody = Schema<'SendWhisperBody'>;

type SuccessCode = 200 | 202 | 204;
type ErrorCode = 400 | 401 | 403 | 404 | 409 | 422 | 425 | 429 | 500;
export type ApiResponse<
  TData,
  TSuccessCode extends SuccessCode = SuccessCode,
  TErrorCode extends ErrorCode = ErrorCode,
> = Promise<
  | { ok: true; status: TSuccessCode; data: TData }
  | { ok: false; status: TErrorCode; data: unknown }
>;

const BASE_URL = 'https://api.twitch.tv/helix';

const getSearchParams = <T extends Record<string, any>>(params: T) => {
  const kvPairs: string[] = [];
  for (const key of Object.keys(params)) {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((v) => kvPairs.push(`${key}=${v}`));
    } else {
      kvPairs.push(`${key}=${value}`);
    }
  }
  return kvPairs.join('&');
};

type CallApiOptions = {
  path: string;
  method?: string;
  params?: any;
  body?: any;
  clientId?: string;
  accessToken?: string;
  requiresAuth?: boolean;
}

export type TwitchApiOptions = {
  accessToken?: string;
  clientId?: string;
};

export class TwitchApi {
  private _accessToken: string;
  private _clientId: string;

  constructor({ accessToken = '', clientId = '' }: TwitchApiOptions = {}) {
    this._accessToken = accessToken;
    this._clientId = clientId;
  }

  private async callApi({
    path,
    method = 'GET',
    params,
    body,
    clientId,
    accessToken,
    requiresAuth = true,
  }: CallApiOptions): Promise<any> {
    const url = params
      ? `${BASE_URL}${path}?${getSearchParams(params)}`
      : `${BASE_URL}${path}`;
    const options: RequestInit = { method };
    const headers = new Headers();
    options.headers = headers;
    if (body) {
      headers.set('Content-Type', 'application/json');
      options.body = JSON.stringify(body);
    }
    if (requiresAuth) {
      options.headers.set('Authorization', `Bearer ${accessToken || this._accessToken}`);
      options.headers.set('Client-Id', clientId || this._clientId);
    }
    const response = await fetch(url, options);
    return {
      ok: response.ok,
      status: response.status as any,
      data: await response.json(),
    };
  }

  ads = {
    /**
     * Starts a commercial on the specified channel.
     *
     * **NOTE**: Only partners and affiliates may run commercials and they must be streaming live at the time.
     *
     * **NOTE**: Only the broadcaster may start a commercial; the broadcaster’s editors and moderators may not start commercials on behalf of the broadcaster.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:edit:commercial** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/channels/commercial`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully started the commercial.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _length_ query parameter is required.
     * * The ID in _broadcaster\_id_ is not valid.
     * * To start a commercial, the broadcaster must be streaming live.
     * * The broadcaster may not run another commercial until the cooldown period expires. The `retry_after` field in the previous start commercial response specifies the amount of time the broadcaster must wait between running commercials.
     *
     * _401 Unauthorized_
     *
     * * The ID in `broadcaster_id` must match the user ID found in the request’s OAuth token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:edit:commercial** scope.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _404 Not Found_
     *
     * * The ID in `broadcaster_id` was not found.
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster may not run another commercial until the cooldown period expires. The `retry_after` field in the previous start commercial response specifies the amount of time the broadcaster must wait between running commercials.
     *
     * @see https://dev.twitch.tv/docs/api/reference#start-commercial
     */
    startCommercial: async (
      body: StartCommercialBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<StartCommercialResponse, 200, 400 | 401 | 404 | 429> => 
      this.callApi({
        path: '/channels/commercial',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * This endpoint returns ad schedule related information, including snooze, when the last ad was run, when the next ad is scheduled, and if the channel is currently in pre-roll free time. Note that a new ad cannot be run until 8 minutes after running a previous ad.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:ads** scope. The `user_id` in the user access token must match the `broadcaster_id`.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channels/ads`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Returns the ad schedule information for the channel.
     *
     * _400 Bad Request_
     *
     * The broadcaster ID is not valid.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-ad-schedule
     */
    getAdSchedule: async (
      params: GetAdScheduleParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetAdScheduleResponse, 200, 400 | 500> => 
      this.callApi({
        path: '/channels/ads',
        params,
        clientId,
        accessToken,
      }),
    /**
     * If available, pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes. This endpoint duplicates the snooze functionality in the creator dashboard’s Ads Manager.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:ads** scope. The `user_id` in the user access token must match the `broadcaster_id`.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/channels/ads/schedule/snooze`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * User’s next ad is successfully snoozed. Their _snooze\_count_ is decremented and _snooze\_refresh\_time_ and _next\_ad\_at_ are both updated.
     *
     * _400 Bad Request_
     *
     * * The channel is not currently live.
     * * The broadcaster ID is not valid.
     * * Channel does not have an upcoming scheduled ad break.
     *
     * _429 Too Many Requests_
     *
     * Channel has no snoozes left.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#snooze-next-ad
     */
    snoozeNextAd: async (
      params: SnoozeNextAdParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<SnoozeNextAdResponse, 200, 400 | 429 | 500> => 
      this.callApi({
        path: '/channels/ads/schedule/snooze',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
  };
  analytics = {
    /**
     * Gets an analytics report for one or more extensions. The response contains the URLs used to download the reports (CSV files). [Learn More](https://dev.twitch.tv/docs/insights)
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **analytics:read:extensions** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/analytics/extensions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s analytics reports.
     *
     * _400 Bad Request_
     *
     * * The start and end dates are optional but if you specify one, you must specify the other.
     * * The end date must be equal to or later than the start date.
     * * The cursor specified in the _after_ query parameter is not valid.
     * * The resource supports only forward pagination (use the _after_ query parameter).
     * * The _first_ query parameter is outside the allowed range of values.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **analytics:read:extensions** scope.
     * * The OAuth token is not valid.
     * * The Client-Id header is required.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _404 Not Found_
     *
     * * The extension specified in the _extension\_id_ query parameter was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extension-analytics
     */
    getExtensionAnalytics: async (
      params: GetExtensionAnalyticsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetExtensionAnalyticsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/analytics/extensions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets an analytics report for one or more games. The response contains the URLs used to download the reports (CSV files). [Learn more](https://dev.twitch.tv/docs/insights)
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **analytics:read:games** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/analytics/games`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s analytics reports.
     *
     * _400 Bad Request_
     *
     * * The start and end dates are optional but if you specify one, you must specify the other.
     * * The end date must be equal to or later than the start date.
     * * The cursor specified in the _after_ query parameter is not valid.
     * * The resource supports only forward pagination (use the _after_ query parameter).
     * * The _first_ query parameter is outside the allowed range of values.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **analytics:read:games** scope.
     * * The OAuth token is not valid.
     * * The Client-Id header is required.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _404 Not Found_
     *
     * * The game specified in the _game\_id_ query parameter was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-game-analytics
     */
    getGameAnalytics: async (
      params: GetGameAnalyticsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetGameAnalyticsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/analytics/games',
        params,
        clientId,
        accessToken,
      }),
  };
  bits = {
    /**
     * Gets the Bits leaderboard for the authenticated broadcaster.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **bits:read** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/bits/leaderboard`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s Bits leaderboard.
     *
     * _400 Bad Request_
     *
     * * The time period specified in the _period_ query parameter is not valid.
     * * The _started\_at_ query parameter is required if _period_ is not set to _all_.
     * * The value in the _count_ query parameter is outside the range of allowed values.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a user access token.
     * * The user access token must include the the **bits:read** scope.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _403 Forbidden_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard
     */
    getBitsLeaderboard: async (
      params: GetBitsLeaderboardParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetBitsLeaderboardResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/bits/leaderboard',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of Cheermotes that users can use to cheer Bits in any Bits-enabled channel’s chat room. Cheermotes are animated emotes that viewers can assign Bits to.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/bits/cheermotes`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the Cheermotes.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-cheermotes
     */
    getCheermotes: async (
      params: GetCheermotesParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetCheermotesResponse, 200, 401> => 
      this.callApi({
        path: '/bits/cheermotes',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets an extension’s list of transactions. A transaction records the exchange of a currency (for example, Bits) for a digital product.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/extensions/transactions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of transactions.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     * * The request specified too many _id_ query parameters.
     * * The pagination cursor is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token.
     * * The access token is not valid.
     * * The ID in the _extension\_id_ query parameter must match the client ID in the access token.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _404 Not Found_
     *
     * * One or more of the transaction IDs specified using the _id_ query parameter were not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extension-transactions
     */
    getExtensionTransactions: async (
      params: GetExtensionTransactionsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetExtensionTransactionsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/extensions/transactions',
        params,
        clientId,
        accessToken,
      }),
  };
  channels = {
    /**
     * Gets information about one or more channels.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channels`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of channels.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The broadcaster ID is not valid.
     * * The number of _broadcaster\_id_ query parameters exceeds the maximum allowed.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _429 Too Many Requests_
     *
     * * The application exceeded the number of calls it may make per minute. For details, see [Rate Limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits).
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-information
     */
    getChannelInformation: async (
      params: GetChannelInformationParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelInformationResponse, 200, 400 | 401 | 429 | 500> => 
      this.callApi({
        path: '/channels',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates a channel’s properties.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:broadcast** scope.
     *
     * __Request Body:__
     *
     * All fields are optional, but you must specify at least one field.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/channels`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully updated the channel’s properties.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The request must update at least one property.
     * * The `title` field may not contain an empty string.
     * * The ID in `game_id` is not valid.
     * * To update the `delay` field, the broadcaster must have partner status.
     * * The list in the `tags` field exceeds the maximum number of tags allowed.
     * * A tag in the `tags` field exceeds the maximum length allowed.
     * * A tag in the `tags` field is empty.
     * * A tag in the `tags` field contains special characters or spaces.
     * * One or more tags in the `tags` field failed AutoMod review.
     * * Game restricted for user's age and region
     *
     * _401 Unauthorized_
     *
     * * User requests CCL for a channel they don’t own
     * * The ID in _broadcaster\_id_ must match the user ID found in the OAuth token.
     * * The Authorization header is required and must specify a user access token.
     * * The OAuth token must include the **channel:manage:broadcast** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * User requested gaming CCLs to be added to their channel
     * * Unallowed CCLs declared for underaged authorized user in a restricted country
     *
     * _409 Conflict_
     *
     * User set the Branded Content flag too frequently
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#modify-channel-information
     */
    modifyChannelInformation: async (
      params: ModifyChannelInformationParams,
      body: ModifyChannelInformationBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 409 | 500> => 
      this.callApi({
        path: '/channels',
        method: 'PATCH',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s list editors.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:editors** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channels/editors`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of editors.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID found in the OAuth token.
     * * The Authorization header is required and must specify a user access token.
     * * The OAuth token must include the **channel:read:editors** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-editors
     */
    getChannelEditors: async (
      params: GetChannelEditorsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelEditorsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/channels/editors',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:follows** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channels/followed`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of followers.
     *
     * _400 Bad Request_
     *
     * Possible reasons:
     *
     * * The _user\_id_ query parameter is required.
     * * The _broadcaster\_id_ query parameter is not valid.
     * * The _user\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * Possible reasons:
     *
     * * The ID in the _user\_id_ query parameter must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token is missing the **user:read:follows** scope.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-followed-channels
     */
    getFollowedChannels: async (
      params: GetFollowedChannelsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetFollowedChannelsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/channels/followed',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.
     *
     * __Authorization:__
     *
     * * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:followers** scope.
     * * The ID in the broadcaster\_id query parameter must match the user ID in the access token or the user ID in the access token must be a moderator for the specified broadcaster.
     *
     * This endpoint will return specific follower information only if both of the above are true. If a scope is not provided or the user isn’t the broadcaster or a moderator for the specified channel, only the total follower count will be included in the response.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channels/followers`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of followers.
     *
     * _400 Bad Request_
     *
     * Possible reasons:
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _broadcaster\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * Possible reasons:
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token or the user must be a moderator for the specified broadcaster.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token is missing the **moderator:read:followers** scope.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     * * The _user\_id_ parameter was specified but either the user access token is missing the **moderator:read:followers** scope or the user is not the broadcaster or moderator for the specified channel
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-followers
     */
    getChannelFollowers: async (
      params: GetChannelFollowersParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelFollowersResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/channels/followers',
        params,
        clientId,
        accessToken,
      }),
  };
  channelPoints = {
    /**
     * Creates a Custom Reward in the broadcaster’s channel. The maximum number of custom rewards per channel is 50, which includes both enabled and disabled rewards.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/channel_points/custom_rewards`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully created the custom reward.
     *
     * _400 Bad Request_
     *
     * * The request exceeds the maximum number of rewards allowed per channel.
     * * The _broadcaster\_id_ query parameter is required.
     * * The `title` field is required.
     * * The `title` must contain a minimum of 1 character and a maximum of 45 characters.
     * * The `title` must be unique amongst all of the broadcaster's custom rewards.
     * * The `cost` field is required.
     * * The `cost` field must contain a minimum of 1 point.
     * * The `prompt` field is limited to a maximum of 200 characters.
     * * If `is_max_per_stream_enabled` is **true**, the minimum value for `max_per_stream` is 1.
     * * If `is_max_per_user_per_stream_enabled` is **true**, the minimum value for `max_per_user_per_stream` is 1.
     * * If `is_global_cooldown_enabled` is **true**, the minimum value for `global_cooldown_seconds` is 1.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a user access token.
     * * The user access token is missing the **channel:manage:redemptions** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The broadcaster is not a partner or affiliate.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-custom-rewards
     */
    createCustomRewards: async (
      params: CreateCustomRewardsParams,
      body: CreateCustomRewardsBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateCustomRewardsResponse, 200, 400 | 401 | 403 | 500> => 
      this.callApi({
        path: '/channel_points/custom_rewards',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Deletes a custom reward that the broadcaster created.
     *
     * The app used to create the reward is the only app that may delete it. If the reward’s redemption status is UNFULFILLED at the time the reward is deleted, its redemption status is marked as FULFILLED.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/channel_points/custom_rewards`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully deleted the custom reward.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a user access token.
     * * The user access token must include the **channel:manage:redemptions** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The ID in the Client-Id header must match the client ID used to create the custom reward.
     * * The broadcaster is not a partner or affiliate.
     *
     * _404 Not Found_
     *
     * * The custom reward specified in the _id_ query parameter was not found.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-custom-reward
     */
    deleteCustomReward: async (
      params: DeleteCustomRewardParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 404 | 500> => 
      this.callApi({
        path: '/channel_points/custom_rewards',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of custom rewards that the specified broadcaster created.
     *
     * **NOTE**: A channel may offer a maximum of 50 rewards, which includes both enabled and disabled rewards.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:redemptions** or **channel:manage:redemptions** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channel_points/custom_rewards`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of custom rewards.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The request exceeds the maximum number of _id_ query parameters that you may specify.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header must specify a user access token.
     * * The user access token must include the **channel:read:redemptions** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The broadcaster is not a partner or affiliate.
     *
     * _404 Not Found_
     *
     * * All of the custom rewards specified using the _id_ query parameter were not found.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-custom-reward
     */
    getCustomReward: async (
      params: GetCustomRewardParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetCustomRewardResponse, 200, 400 | 401 | 403 | 404 | 500> => 
      this.callApi({
        path: '/channel_points/custom_rewards',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates a custom reward. The app used to create the reward is the only app that may update the reward.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
     *
     * __Request Body:__
     *
     * The body of the request should contain only the fields you’re updating.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/channel_points/custom_rewards`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the custom reward.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _id_ query parameter is required.
     * * The `title` must contain a minimum of 1 character and a maximum of 45 characters.
     * * The `title` must be unique amongst all of the broadcaster's custom rewards.
     * * The `cost` field must contain a minimum of 1 point.
     * * The `prompt` field is limited to a maximum of 200 characters.
     * * If `is_max_per_stream_enabled` is **true**, the minimum value for `max_per_stream` is 1.
     * * If `is_max_per_user_per_stream_enabled` is **true**, the minimum value for `max_per_user_per_stream` is 1.
     * * If `is_global_cooldown_enabled` is **true**, the minimum value for `global_cooldown_seconds` is 1 and the maximum is 604800.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a user access token.
     * * The user access token must include the **channel:manage:redemptions** scope.
     * * The OAuth token is not valide.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The ID in the Client-Id header must match the client ID used to create the custom reward.
     * * The broadcaster is not a partner or affiliate.
     *
     * _404 Not Found_
     *
     * * The custom reward specified in the _id_ query parameter was not found.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-custom-reward
     */
    updateCustomReward: async (
      params: UpdateCustomRewardParams,
      body: UpdateCustomRewardBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateCustomRewardResponse, 200, 400 | 401 | 403 | 404 | 500> => 
      this.callApi({
        path: '/channel_points/custom_rewards',
        method: 'PATCH',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of redemptions for the specified custom reward. The app used to create the reward is the only app that may get the redemptions.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:redemptions** or **channel:manage:redemptions** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of redeemed custom rewards.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _reward\_id_ query parameter is required.
     * * The _status_ query parameter is required if you didn't specify the _id_ query parameter.
     * * The value in the _status_ query parameter is not valid.
     * * The value in the _sort_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a user access token.
     * * The user access token must include the **channel:read:redemptions** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The ID in the Client-Id header must match the client ID used to create the custom reward.
     * * The broadcaster is not a partner or affiliate.
     *
     * _404 Not Found_
     *
     * * All of the redemptions specified using the _id_ query parameter were not found.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-custom-reward-redemption
     */
    getCustomRewardRedemption: async (
      params: GetCustomRewardRedemptionParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetCustomRewardRedemptionResponse, 200, 400 | 401 | 403 | 404 | 500> => 
      this.callApi({
        path: '/channel_points/custom_rewards/redemptions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates a redemption’s status. You may update a redemption only if its status is UNFULFILLED. The app used to create the reward is the only app that may update the redemption.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the redemption’s status.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _reward\_id_ query parameter is required.
     * * The _id_ query parameter is required.
     * * The value in the _status_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a user access token.
     * * The user access token must include the **channel:manage:redemptions** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The ID in the Client-Id header must match the client ID used to create the custom reward.
     * * The broadcaster is not a partner or affiliate.
     *
     * _404 Not Found_
     *
     * * The custom reward specified in the _reward\_id_ query parameter was not found.
     * * The redemptions specified using the _id_ query parameter were not found or their statuses weren't marked as UNFULFILLED.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-redemption-status
     */
    updateRedemptionStatus: async (
      params: UpdateRedemptionStatusParams,
      body: UpdateRedemptionStatusBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateRedemptionStatusResponse, 200, 400 | 401 | 403 | 404 | 500> => 
      this.callApi({
        path: '/channel_points/custom_rewards/redemptions',
        method: 'PATCH',
        params,
        body,
        clientId,
        accessToken,
      }),
  };
  charity = {
    /**
     * Gets information about the charity campaign that a broadcaster is running. For example, the campaign’s fundraising goal and the current amount of donations.
     *
     * To receive events when progress is made towards the campaign’s goal or the broadcaster changes the fundraising goal, subscribe to the [channel.charity\_campaign.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity%5Fcampaignprogress) subscription type.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:charity** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/charity/campaigns`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved information about the broadcaster’s active charity campaign.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _broadcaster\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:charity** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header must match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The broadcaster is not a partner or affiliate.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-charity-campaign
     */
    getCharityCampaign: async (
      params: GetCharityCampaignParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetCharityCampaignResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/charity/campaigns',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the list of donations that users have made to the broadcaster’s active charity campaign.
     *
     * To receive events as donations occur, subscribe to the [channel.charity\_campaign.donate](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity%5Fcampaigndonate) subscription type.
     *
     * __Authorization:__
     *
     * Requires a user access token that includes the **channel:read:charity** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/charity/donations`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of donations that users contributed to the broadcaster’s charity campaign.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _broadcaster\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:charity** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header must match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The broadcaster is not a partner or affiliate.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-charity-campaign-donations
     */
    getCharityCampaignDonations: async (
      params: GetCharityCampaignDonationsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetCharityCampaignDonationsResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/charity/donations',
        params,
        clientId,
        accessToken,
      }),
  };
  chat = {
    /**
     * Gets the list of users that are connected to the broadcaster’s chat session.
     *
     * **NOTE**: There is a delay between when users join and leave a chat and when the list is updated accordingly.
     *
     * To determine whether a user is a moderator or VIP, use the [Get Moderators](https://dev.twitch.tv/docs/api/reference#get-moderators) and [Get VIPs](https://dev.twitch.tv/docs/api/reference#get-vips) endpoints. You can check the roles of up to 100 users.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:chatters** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/chatters`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of chatters.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The _moderator\_id_ query parameter is required.
     * * The ID in the _moderator\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _moderator\_id_ query parameter must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:read:chatters** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in the _moderator\_id_ query parameter is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-chatters
     */
    getChatters: async (
      params: GetChattersParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChattersResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/chat/chatters',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s list of custom emotes. Broadcasters create these custom emotes for users who subscribe to or follow the channel or cheer Bits in the channel’s chat window. [Learn More](https://dev.twitch.tv/docs/irc/emotes)
     *
     * For information about the custom emotes, see [subscriber emotes](https://help.twitch.tv/s/article/subscriber-emote-guide), [Bits tier emotes](https://help.twitch.tv/s/article/custom-bit-badges-guide?language=bg#slots), and [follower emotes](https://blog.twitch.tv/en/2021/06/04/kicking-off-10-years-with-our-biggest-emote-update-ever/).
     *
     * **NOTE:** With the exception of custom follower emotes, users may use custom emotes in any Twitch chat.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/emotes`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved broadcaster’s list of custom emotes.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-emotes
     */
    getChannelEmotes: async (
      params: GetChannelEmotesParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelEmotesResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/chat/emotes',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the list of [global emotes](https://www.twitch.tv/creatorcamp/en/learn-the-basics/emotes/). Global emotes are Twitch-created emotes that users can use in any Twitch chat.
     *
     * [Learn More](https://dev.twitch.tv/docs/irc/emotes)
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __Request Query Parameters:__
     *
     * None
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/emotes/global`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved Twitch’s list of global emotes.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-global-emotes
     */
    getGlobalEmotes: async (accessToken = '', clientId = ''): ApiResponse<GetGlobalEmotesResponse, 200, 401> => 
      this.callApi({
        path: '/chat/emotes/global',
        clientId,
        accessToken,
      }),
    /**
     * Gets emotes for one or more specified emote sets.
     *
     * An emote set groups emotes that have a similar context. For example, Twitch places all the subscriber emotes that a broadcaster uploads for their channel in the same emote set.
     *
     * [Learn More](https://dev.twitch.tv/docs/irc/emotes)
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/emotes/set`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the emotes for the specified emote sets.
     *
     * _400 Bad Request_
     *
     * * The _emote\_set\_id_ query parameter is required.
     * * The number of _emote\_set\_id_ query parameters exceeds the maximum allowed.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-emote-sets
     */
    getEmoteSets: async (
      params: GetEmoteSetsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetEmoteSetsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/chat/emotes/set',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s list of custom chat badges. The list is empty if the broadcaster hasn’t created custom chat badges. For information about custom badges, see [subscriber badges](https://help.twitch.tv/s/article/subscriber-badge-guide) and [Bits badges](https://help.twitch.tv/s/article/custom-bit-badges-guide).
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/badges`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s custom chat badges.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-chat-badges
     */
    getChannelChatBadges: async (
      params: GetChannelChatBadgesParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelChatBadgesResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/chat/badges',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets Twitch’s list of chat badges, which users may use in any channel’s chat room. For information about chat badges, see [Twitch Chat Badges Guide](https://help.twitch.tv/s/article/twitch-chat-badges-guide).
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __Request Query Parameters:__
     *
     * None
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/badges/global`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of global chat badges.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-global-chat-badges
     */
    getGlobalChatBadges: async (accessToken = '', clientId = ''): ApiResponse<GetGlobalChatBadgesResponse, 200, 401> => 
      this.callApi({
        path: '/chat/badges/global',
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s chat settings.
     *
     * For an overview of chat settings, see [Chat Commands for Broadcasters and Moderators](https://help.twitch.tv/s/article/chat-commands#AllMods) and [Moderator Preferences](https://help.twitch.tv/s/article/setting-up-moderation-for-your-twitch-channel#modpreferences).
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/settings`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s chat settings.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-chat-settings
     */
    getChatSettings: async (
      params: GetChatSettingsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChatSettingsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/chat/settings',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates the broadcaster’s chat settings.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_settings** scope.
     *
     * __Request Body:__
     *
     * All fields are optional. Specify only those fields that you want to update.
     *
     * To set the `slow_mode_wait_time` or `follower_mode_duration` field to its default value, set the corresponding `slow_mode` or `follower_mode` field to **true** (and don’t include the `slow_mode_wait_time` or `follower_mode_duration` field).
     *
     * To set the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field’s value, you must set the corresponding `slow_mode`, `follower_mode`, or `non_moderator_chat_delay` field to **true**.
     *
     * To remove the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field’s value, set the corresponding `slow_mode`, `follower_mode`, or `non_moderator_chat_delay` field to **false** (and don’t include the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field).
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/chat/settings`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the broadcaster’s chat settings.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     * * If _slow\_mode_ is **true**, the `slow_mode_wait_time` field must be set to a valid value.
     * * If `follower_mode` is **true**, the `follower_mode_duration` field must be set to a valid value.
     * * If `non_moderator_chat_delay` is **true**, the `non_moderator_chat_delay_duration` field must be set to a valid value.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _moderator\_id_ query parameter must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:chat\_settings** scope.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in the _moderator\_id_ query parameter must have moderator privileges in the broadcaster's channel.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-chat-settings
     */
    updateChatSettings: async (
      params: UpdateChatSettingsParams,
      body: UpdateChatSettingsBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateChatSettingsResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/chat/settings',
        method: 'PATCH',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Sends an announcement to the broadcaster’s chat room.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:announcements** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/chat/announcements`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully sent the announcement.
     *
     * _400 Bad Request_
     *
     * * The `message` field in the request's body is required.
     * * The `message` field may not contain an empty string.
     * * The `message` field may not contain an empty string.
     * * The string in the `message` field failed review.
     * * The specified color is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token is missing the **moderator:manage:announcements** scope.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#send-chat-announcement
     */
    sendChatAnnouncement: async (
      params: SendChatAnnouncementParams,
      body: SendChatAnnouncementBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/chat/announcements',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Sends a Shoutout to the specified broadcaster. Typically, you send Shoutouts when you or one of your moderators notice another broadcaster in your chat, the other broadcaster is coming up in conversation, or after they raid your broadcast.
     *
     * Twitch’s Shoutout feature is a great way for you to show support for other broadcasters and help them grow. Viewers who do not follow the other broadcaster will see a pop-up Follow button in your chat that they can click to follow the other broadcaster. [Learn More](https://help.twitch.tv/s/article/shoutouts)
     *
     * **Rate Limits** The broadcaster may send a Shoutout once every 2 minutes. They may send the same broadcaster a Shoutout once every 60 minutes.
     *
     * To receive notifications when a Shoutout is sent or received, subscribe to the [channel.shoutout.create](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutcreate) and [channel.shoutout.receive](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutreceive) subscription types. The **channel.shoutout.create** event includes cooldown periods that indicate when the broadcaster may send another Shoutout without exceeding the endpoint’s rate limit.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:shoutouts** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/chat/shoutouts`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully sent the specified broadcaster a Shoutout.
     *
     * _400 Bad Request_
     *
     * * The _from\_broadcaster\_id_ query parameter is required.
     * * The ID in the _from\_broadcaster\_id_ query parameter is not valid.
     * * The _to\_broadcaster\_id_ query parameter is required.
     * * The ID in the _to\_broadcaster\_id_ query parameter is not valid.
     * * The broadcaster may not give themselves a Shoutout.
     * * The broadcaster is not streaming live or does not have one or more viewers.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:shoutouts** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     * * The broadcaster may not send the specified broadcaster a Shoutout.
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster exceeded the number of Shoutouts they may send within a given window. See the endpoint's Rate Limits.
     * * The broadcaster exceeded the number of Shoutouts they may send the same broadcaster within a given window. See the endpoint's Rate Limits.
     *
     * @see https://dev.twitch.tv/docs/api/reference#send-a-shoutout
     */
    sendShoutout: async (
      params: SendShoutoutParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 429> => 
      this.callApi({
        path: '/chat/shoutouts',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the color used for the user’s name in chat.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/chat/color`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the chat color used by the specified users.
     *
     * _400 Bad Request_
     *
     * * The ID in the _user\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-user-chat-color
     */
    getUserChatColor: async (
      params: GetUserChatColorParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetUserChatColorResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/chat/color',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates the color used for the user’s name in chat.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:chat\_color** scope.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/chat/color`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully updated the user’s chat color.
     *
     * _400 Bad Request_
     *
     * * The ID in the _user\_id_ query parameter is not valid.
     * * The _color_ query parameter is required.
     * * The named color in the _color_ query parameter is not valid.
     * * To specify a Hex color code, the user must be a Turbo or Prime user.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:manage:chat\_color** scope.
     * * The OAuth token is not valid.
     * * The ID in the _user\_id_ query parameter must match the user ID in the access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-user-chat-color
     */
    updateUserChatColor: async (
      params: UpdateUserChatColorParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/chat/color',
        method: 'PUT',
        params,
        clientId,
        accessToken,
      }),
  };
  clips = {
    /**
     * Creates a clip from the broadcaster’s stream.
     *
     * This API captures up to 90 seconds of the broadcaster’s stream. The 90 seconds spans the point in the stream from when you called the API. For example, if you call the API at the 4:00 minute mark, the API captures from approximately the 3:35 mark to approximately the 4:05 minute mark. Twitch tries its best to capture 90 seconds of the stream, but the actual length may be less. This may occur if you begin capturing the clip near the beginning or end of the stream.
     *
     * By default, Twitch publishes up to the last 30 seconds of the 90 seconds window and provides a default title for the clip. To specify the title and the portion of the 90 seconds window that’s used for the clip, use the URL in the response’s `edit_url` field. You can specify a clip that’s from 5 seconds to 60 seconds in length. The URL is valid for up to 24 hours or until the clip is published, whichever comes first.
     *
     * Creating a clip is an asynchronous process that can take a short amount of time to complete. To determine whether the clip was successfully created, call [Get Clips](https://dev.twitch.tv/docs/api/reference#get-clips) using the clip ID that this request returned. If Get Clips returns the clip, the clip was successfully created. If after 15 seconds Get Clips hasn’t returned the clip, assume it failed.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **clips:edit** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/clips`
     *
     * __Response Codes:__
     *
     * _202 Accepted_
     *
     * Successfully started the clip process.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter was not found.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify user access token.
     * * The user access token must include the **clips:edit** scope.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The broadcaster has restricted the ability to capture clips to followers and/or subscribers only.
     * * The specified broadcaster has not enabled clips on their channel.
     *
     * _404 Not Found_
     *
     * * The broadcaster in the _broadcaster\_id_ query parameter must be broadcasting live.
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-clip
     */
    createClip: async (
      params: CreateClipParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateClipResponse, 202, 400 | 401 | 403 | 404> => 
      this.callApi({
        path: '/clips',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets one or more video clips that were captured from streams. For information about clips, see [How to use clips](https://help.twitch.tv/s/article/how-to-use-clips).
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __Request Query Parameters:__
     *
     * The _id_, _game\_id_, and _broadcaster\_id_ query parameters are mutually exclusive.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/clips`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of video clips.
     *
     * _400 Bad Request_
     *
     * * The _id_ or _game\_id_ or _broadcaster\_id_ query parameter is required.
     * * The _id_, _game\_id_, and _broadcaster\_id_ query parameters are mutually exclusive; you may specify only one of them.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _404 Not Found_
     *
     * * The ID in _game\_id_ was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-clips
     */
    getClips: async (
      params: GetClipsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetClipsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/clips',
        params,
        clientId,
        accessToken,
      }),
  };
  ccls = {
    /**
     * Gets information about Twitch content classification labels.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/content_classification_labels`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of CCLs available.
     *
     * _400 Bad Request_
     *
     * _401 Unauthorized_
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-content-classification-labels
     */
    getContentClassificationLabels: async (
      params: GetContentClassificationLabelsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetContentClassificationLabelsResponse, 200, 400 | 401 | 500> => 
      this.callApi({
        path: '/content_classification_labels',
        params,
        clientId,
        accessToken,
      }),
  };
  entitlements = {
    /**
     * Gets an organization’s list of entitlements that have been granted to a game, a user, or both.
     *
     * The following table identifies the request parameters that you may specify based on the type of access token used.
     *
     * | Access token type | Parameter | Description |
     * | - | - | - |
     * | App | None | If you don’t specify request parameters, the request returns all entitlements that your organization owns. |
     * | App | user_id | The request returns all entitlements for any game that the organization granted to the specified user. |
     * | App | user_id, game_id | The request returns all entitlements that the specified game granted to the specified user. |
     * | App | game_id | The request returns all entitlements that the specified game granted to all entitled users. |
     * | User | None | If you don’t specify request parameters, the request returns all entitlements for any game that the organization granted to the user identified in the access token. |
     * | User | user_id | Invalid. |
     * | User | user_id, game_id | Invalid. |
     * | User | game_id | The request returns all entitlements that the specified game granted to the user identified in the access token. |
     *
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens). The client ID in the access token must own the game.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/entitlements/drops`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the entitlements.
     *
     * _400 Bad Request_
     *
     * * The value in the _fulfillment\_status_ query parameter is not valid.
     * * The ID in the _user\_id_ query parameter must match the user ID in the user access token.
     * * The client in the access token is not associated with a known organization.
     * * The owner of the client in the access token is not a member of the organization.
     *
     * _401 Unauthorized_
     *
     * * The ID in the Client-Id header must match the Client ID in the access token.
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     *
     * _403 Forbidden_
     *
     * * The organization associated with the client in the access token must own the game specified in the _game\_id_ query parameter.
     * * The organization associated with the client in the access token must own the entitlements specified in the _id_ query parameter.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-drops-entitlements
     */
    getDropsEntitlements: async (
      params: GetDropsEntitlementsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetDropsEntitlementsResponse, 200, 400 | 401 | 403 | 500> => 
      this.callApi({
        path: '/entitlements/drops',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates the Drop entitlement’s fulfillment status.
     *
     * The following table identifies which entitlements are updated based on the type of access token used.
     *
     * | Access token type | Data that’s updated |
     * | - | - |
     * | App | Updates all entitlements with benefits owned by the organization in the access token. |
     * | User | Updates all entitlements owned by the user in the access token and where the benefits are owned by the organization in the access token. |
     *
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens). The client ID in the access token must own the game.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/entitlements/drops`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully requested the updates. Check the response to determine which updates succeeded.
     *
     * _400 Bad Request_
     *
     * * The value in the `fulfillment_status` field is not valid.
     * * The client in the access token is not associated with a known organization.
     * * The owner of the client in the access token is not a member of the organization.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the access token.
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-drops-entitlements
     */
    updateDropsEntitlements: async (
      body: UpdateDropsEntitlementsBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateDropsEntitlementsResponse, 200, 400 | 401 | 500> => 
      this.callApi({
        path: '/entitlements/drops',
        method: 'PATCH',
        body,
        clientId,
        accessToken,
      }),
  };
  extensions = {
    /**
     * Gets the specified configuration segment from the specified extension.
     *
     * **Rate Limits**: You may retrieve each segment a maximum of 20 times per minute.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/extensions/configurations`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the configurations.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     * * The value in the _segment_ query parameter is not valid.
     * * The _broadcaster\_id_ query parameter is required if the _segment_ query parameter is set to broadcaster or developer.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * _429 Too Many Requests_
     *
     * * The app exceeded the number of requests that it may make per minute. See Rate Limits above.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extension-configuration-segment
     */
    getExtensionConfigurationSegment: async (
      params: GetExtensionConfigurationSegmentParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetExtensionConfigurationSegmentResponse, 200, 400 | 401 | 429> => 
      this.callApi({
        path: '/extensions/configurations',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates a configuration segment. The segment is limited to 5 KB. Extensions that are active on a channel do not receive the updated configuration.
     *
     * **Rate Limits**: You may update the configuration a maximum of 20 times per minute.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/extensions/configurations`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully updated the configuration.
     *
     * _400 Bad Request_
     *
     * * The `broadcaster_id` field is required if `segment` is set to developer or broadcaster.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * @see https://dev.twitch.tv/docs/api/reference#set-extension-configuration-segment
     */
    setExtensionConfigurationSegment: async (
      body: SetExtensionConfigurationSegmentBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/extensions/configurations',
        method: 'PUT',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Updates the extension’s required\_configuration string. Use this endpoint if your extension requires the broadcaster to configure the extension before activating it (to require configuration, you must select **Custom/My Own Service** in Extension [Capabilities](https://dev.twitch.tv/docs/extensions/life-cycle/#capabilities)). For more information, see [Required Configurations](https://dev.twitch.tv/docs/extensions/building#required-configurations) and [Setting Required Configuration](https://dev.twitch.tv/docs/extensions/building#setting-required-configuration-with-the-configuration-service-optional).
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an EBS. For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). Set the `role` field to _external_ and the `user_id` field to the ID of the user that owns the extension.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/extensions/required_configuration`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully updated the extension’s required\_configuration string.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The `extension_id` field is required.
     * * The `extension_version` field is required.
     * * The `required_configuration` field is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * @see https://dev.twitch.tv/docs/api/reference#set-extension-required-configuration
     */
    setExtensionRequiredConfiguration: async (
      params: SetExtensionRequiredConfigurationParams,
      body: SetExtensionRequiredConfigurationBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/extensions/required_configuration',
        method: 'PUT',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Sends a message to one or more viewers. You can send messages to a specific channel or to all channels where your extension is active. This endpoint uses the same mechanism as the [send](https://dev.twitch.tv/docs/extensions/reference#send) JavaScript helper function used to send messages.
     *
     * **Rate Limits**: You may send a maximum of 100 messages per minute per combination of extension client ID and broadcaster ID.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)) along with the `channel_id` and `pubsub_perms` fields. The `role` field must be set to _external_.
     *
     * To send the message to a specific channel, set the `channel_id` field in the JWT to the channel’s ID and set the `pubsub_perms.send` array to _broadcast_.
     *
     * ```
     * {
     *   "exp": 1503343947,
     *   "user_id": "27419011",
     *   "role": "external",
     *   "channel_id": "27419011",
     *   "pubsub_perms": {
     *     "send":[
     *       "broadcast"
     *     ]
     *   }
     * }
     *
     * ```
     *
     * To send the message to all channels on which your extension is active, set the `channel_id` field to _all_ and set the `pubsub_perms.send` array to _global_.
     *
     * ```
     * {
     *   "exp": 1503343947,
     *   "user_id": "27419011",
     *   "role": "external",
     *   "channel_id": "all",
     *   "pubsub_perms": {
     *     "send":[
     *       "global"
     *     ]
     *   }
     * }
     *
     * ```
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/extensions/pubsub`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully sent the message.
     *
     * _400 Bad Request_
     *
     * * The `broadcaster_id` field in the request's body may only be set if the `is_global_broadcast` field is set to **false**.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * _422 Unprocessable Entity_
     *
     * * The message is too large.
     *
     * @see https://dev.twitch.tv/docs/api/reference#send-extension-pubsub-message
     */
    sendExtensionPubSubMessage: async (
      body: SendExtensionPubSubMessageBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 422> => 
      this.callApi({
        path: '/extensions/pubsub',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of broadcasters that are streaming live and have installed or activated the extension.
     *
     * It may take a few minutes for the list to include or remove broadcasters that have recently gone live or stopped broadcasting.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/extensions/live`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of broadcasters.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     * * The pagination cursor is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _404 Not Found_
     *
     * * The extension specified in the _extension\_id_ query parameter was not found or it's not being used in a live stream.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extension-live-channels
     */
    getExtensionLiveChannels: async (
      params: GetExtensionLiveChannelsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetExtensionLiveChannelsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/extensions/live',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets an extension’s list of shared secrets.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/extensions/jwt/secrets`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of secrets.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extension-secrets
     */
    getExtensionSecrets: async (accessToken = '', clientId = ''): ApiResponse<GetExtensionSecretsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/extensions/jwt/secrets',
        clientId,
        accessToken,
      }),
    /**
     * Creates a shared secret used to sign and verify JWT tokens. Creating a new secret removes the current secrets from service. Use this function only when you are ready to use the new secret it returns.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/extensions/jwt/secrets`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully created the new secret.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     * * The delay specified in the _delay_ query parameter is too short.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-extension-secret
     */
    createExtensionSecret: async (
      params: CreateExtensionSecretParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateExtensionSecretResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/extensions/jwt/secrets',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Sends a message to the specified broadcaster’s chat room. The extension’s name is used as the username for the message in the chat room. To send a chat message, your extension must enable **Chat Capabilities** (under your extension’s **Capabilities** tab).
     *
     * **Rate Limits**: You may send a maximum of 12 messages per minute per channel.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` and `user_id` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/extensions/chat`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully sent the chat message.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The `extension_id` field in the request's body is required.
     * * The `extension_version` field in the request's body is required.
     * * The `text` field in the request's body is required.
     * * The message is too long.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a JWT token.
     * * The ID in the _broadcaster\_id_ query parameter must match the `channel_id` claim in the JWT.
     * * The JWT token is not valid.
     * * The Client-Id header is required.
     *
     * @see https://dev.twitch.tv/docs/api/reference#send-extension-chat-message
     */
    sendExtensionChatMessage: async (
      params: SendExtensionChatMessageParams,
      body: SendExtensionChatMessageBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/extensions/chat',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets information about an extension.
     *
     * __Authorization:__
     *
     * Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` field (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)), and the `role` field must be set to _external_.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/extensions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of extensions.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The request must specify the Authorization header.
     * * The Authorization header is required and must specify a JWT token.
     * * The JWT token is not valid.
     * * The request must specify the Client-Id header.
     *
     * _404 Not Found_
     *
     * * The extension in the _extension\_id_ query parameter was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extensions
     */
    getExtensions: async (
      params: GetExtensionsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetExtensionsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/extensions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets information about a released extension. Returns the extension if its `state` is Released.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/extensions/released`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the extension.
     *
     * _400 Bad Request_
     *
     * * The _extension\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _404 Not Found_
     *
     * * The extension specified in the _extension\_id_ query parameter was not found or is not released.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-released-extensions
     */
    getReleasedExtensions: async (
      params: GetReleasedExtensionsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetReleasedExtensionsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/extensions/released',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the list of Bits products that belongs to the extension. The client ID in the app access token identifies the extension.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must be the extension’s client ID.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/bits/extensions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of products.
     *
     * _400 Bad Request_
     *
     * * The ID in the Client-Id header must belong to an extension.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token; you may not specify a user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-extension-bits-products
     */
    getExtensionBitsProducts: async (
      params: GetExtensionBitsProductsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetExtensionBitsProductsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/bits/extensions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Adds or updates a Bits product that the extension created. If the SKU doesn’t exist, the product is added. You may update all fields except the `sku` field.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must match the extension’s client ID.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/bits/extensions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully created the product.
     *
     * _400 Bad Request_
     *
     * * The `sku` field is required.
     * * The value in the `sku` field is not valid. The SKU may contain only alphanumeric characters, dashes (-), underscores (\_), and periods (.).
     * * The `cost` object's `amount` field is required.
     * * The value in the `cost` object's `amount` field is not valid.
     * * The cost object's `type` field is required.
     * * The value in the `cost` object's `type` field is not valid.
     * * The `display_name` field is required.
     * * The ID in the Client-Id header must belong to the extension.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token; you may not specify a user access token.
     * * The OAuth token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-extension-bits-product
     */
    updateExtensionBitsProduct: async (
      body: UpdateExtensionBitsProductBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateExtensionBitsProductResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/bits/extensions',
        method: 'PUT',
        body,
        clientId,
        accessToken,
      }),
  };
  eventSub = {
    /**
     * Creates an EventSub subscription.
     *
     * __Authorization:__
     *
     * If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token. If the subscription type requires user authorization, the user must have granted your app (client ID) permissions to receive those events before you subscribe to them. For example, to subscribe to [channel.subscribe](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscribe) events, your app must get a user access token that includes the `channel:read:subscriptions` scope, which adds the required permission to your app access token’s client ID.
     *
     * If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. If the subscription type requires user authorization, the token must include the required scope. However, if the subscription type doesn’t include user authorization, the token may include any scopes or no scopes.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/eventsub/subscriptions`
     *
     * __Response Codes:__
     *
     * _202 Accepted_
     *
     * Successfully accepted the subscription request.
     *
     * _400 Bad Request_
     *
     * * The `condition` field is required.
     * * The user specified in the `condition` object does not exist.
     * * The `condition` object is missing one or more required fields.
     * * The combination of values in the `version` and `type` fields is not valid.
     * * The length of the string in the `secret` field is not valid.
     * * The URL in the transport's `callback` field is not valid. The URL must use the HTTPS protocol and the 443 port number.
     * * The value specified in the `method` field is not valid.
     * * The `callback` field is required if you specify the webhook transport method.
     * * The `session_id` field is required if you specify the WebSocket transport method.
     * * The combination of subscription type and version is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token if the transport method is webhook.
     * * The Authorization header is required and must specify a user access token if the transport method is WebSocket.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _403 Forbidden_
     *
     * * The access token is missing the required scopes.
     *
     * _409 Conflict_
     *
     * * A subscription already exists for the specified event type and condition combination.
     *
     * _429 Too Many Requests_
     *
     * * The request exceeds the number of subscriptions that you may create with the same combination of `type` and `condition` values.
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription
     */
    createEventSubSubscription: async (
      body: CreateEventSubSubscriptionBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateEventSubSubscriptionResponse, 202, 400 | 401 | 403 | 409 | 429> => 
      this.callApi({
        path: '/eventsub/subscriptions',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Deletes an EventSub subscription.
     *
     * __Authorization:__
     *
     * If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token.
     *
     * If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/eventsub/subscriptions`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully deleted the subscription.
     *
     * _400 Bad Request_
     *
     * * The _id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _404 Not Found_
     *
     * * The subscription was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-eventsub-subscription
     */
    deleteEventSubSubscription: async (
      params: DeleteEventSubSubscriptionParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 404> => 
      this.callApi({
        path: '/eventsub/subscriptions',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of EventSub subscriptions that the client in the access token created.
     *
     * __Authorization:__
     *
     * If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token.
     *
     * If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.
     *
     * __Request Query Parameters:__
     *
     * Use the _status_, _type_, and _user\_id_ query parameters to filter the list of subscriptions that are returned. The filters are mutually exclusive; the request fails if you specify more than one filter.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/eventsub/subscriptions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the subscriptions.
     *
     * _400 Bad Request_
     *
     * * The request may specify only one filter query parameter. For example, either _type_ or _status_ or _user\_id_.
     * * The value in the _type_ query parameter is not valid.
     * * The value in the _status_ query parameter is not valid.
     * * The cursor specified in the _after_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-eventsub-subscriptions
     */
    getEventSubSubscriptions: async (
      params: GetEventSubSubscriptionsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetEventSubSubscriptionsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/eventsub/subscriptions',
        params,
        clientId,
        accessToken,
      }),
  };
  games = {
    /**
     * Gets information about all broadcasts on Twitch.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/games/top`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of broadcasts.
     *
     * _400 Bad Request_
     *
     * * The value in the _first_ query parameter is not valid.
     * * The cursor in the _after_ or _before_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-top-games
     */
    getTopGames: async (
      params: GetTopGamesParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetTopGamesResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/games/top',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets information about specified categories or games.
     *
     * You may get up to 100 categories or games by specifying their ID or name. You may specify all IDs, all names, or a combination of IDs and names. If you specify a combination of IDs and names, the total number of IDs and names must not exceed 100.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/games`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the specified games.
     *
     * _400 Bad Request_
     *
     * * The request must specify the _id_ or _name_ or _igdb\_id_ query parameter.
     * * The combined number of game IDs (_id_ and _igdb\_id_) and game names that you specify in the request must not exceed 100.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-games
     */
    getGames: async (
      params: GetGamesParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetGamesResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/games',
        params,
        clientId,
        accessToken,
      }),
  };
  goals = {
    /**
     * Gets the broadcaster’s list of active goals. Use this endpoint to get the current progress of each goal.
     *
     * Instead of polling for the progress of a goal, consider [subscribing](https://dev.twitch.tv/docs/eventsub/manage-subscriptions) to receive notifications when a goal makes progress using the [channel.goal.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelgoalprogress) subscription type. [Read More](https://dev.twitch.tv/docs/api/goals#requesting-event-notifications)
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:goals** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/goals`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s goals.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:goals** scope.
     * * The ID in _broadcaster\_id_ must match the user ID in the user access token.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-creator-goals
     */
    getCreatorGoals: async (
      params: GetCreatorGoalsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetCreatorGoalsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/goals',
        params,
        clientId,
        accessToken,
      }),
  };
  guestStar = {
    /**
     * BETA Gets the channel settings for configuration of the Guest Star feature for a particular host.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/guest_star/channel_settings`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _moderator\_id_
     *
     * _403 Forbidden_
     *
     * Insufficient authorization for viewing channel’s Guest Star settings
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-guest-star-settings
     */
    getChannelGuestStarSettings: async (
      params: GetChannelGuestStarSettingsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelGuestStarSettingsResponse, 200, 400 | 403> => 
      this.callApi({
        path: '/guest_star/channel_settings',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Mutates the channel settings for configuration of the Guest Star feature for a particular host.
     *
     * __Authorization:__
     *
     * * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star`
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/guest_star/channel_settings`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully updated channel settings
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Invalid _slot\_count_
     * * Invalid _group\_layout_
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-channel-guest-star-settings
     */
    updateChannelGuestStarSettings: async (
      params: UpdateChannelGuestStarSettingsParams,
      body: UpdateChannelGuestStarSettingsBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400> => 
      this.callApi({
        path: '/guest_star/channel_settings',
        method: 'PUT',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * BETA Gets information about an ongoing Guest Star session for a particular channel.
     *
     * __Authorization:__
     *
     * * Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
     * * Guests must be either invited or assigned a slot within the session
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/guest_star/session`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _moderator\_id_
     *
     * _401 Unauthorized_
     *
     * _moderator\_id_ and user token do not match
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-guest-star-session
     */
    getGuestStarSession: async (
      params: GetGuestStarSessionParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetGuestStarSessionResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/guest_star/session',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Programmatically creates a Guest Star session on behalf of the broadcaster. Requires the broadcaster to be present in the call interface, or the call will be ended automatically.
     *
     * __Authorization:__
     *
     * * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star`
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/guest_star/session`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Session limit reached (1 active call)
     *
     * _401 Unauthorized_
     *
     * Phone verification missing
     *
     * _403 Forbidden_
     *
     * Insufficient authorization for creating session
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-guest-star-session
     */
    createGuestStarSession: async (
      params: CreateGuestStarSessionParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateGuestStarSessionResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/guest_star/session',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Programmatically ends a Guest Star session on behalf of the broadcaster. Performs the same action as if the host clicked the “End Call” button in the Guest Star UI.
     *
     * __Authorization:__
     *
     * * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star`
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/guest_star/session`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * _400 Bad Request_
     *
     * * Missing or invalid _broadcaster\_id_
     * * Missing or invalid _session\_id_
     * * Session has already been ended
     *
     * _403 Forbidden_
     *
     * Insufficient authorization for ending session
     *
     * @see https://dev.twitch.tv/docs/api/reference#end-guest-star-session
     */
    endGuestStarSession: async (
      params: EndGuestStarSessionParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 403> => 
      this.callApi({
        path: '/guest_star/session',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Provides the caller with a list of pending invites to a Guest Star session, including the invitee’s ready status while joining the waiting room.
     *
     * __Authorization:__
     *
     * * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/guest_star/invites`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _session\_id_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-guest-star-invites
     */
    getGuestStarInvites: async (
      params: GetGuestStarInvitesParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetGuestStarInvitesResponse, 200, 400> => 
      this.callApi({
        path: '/guest_star/invites',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/guest_star/invites`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _moderator\_id_
     * * Missing _session\_id_
     * * Missing _guest\_id_
     * * Invalid _session\_id_
     *
     * _403 Forbidden_
     *
     * * Unauthorized guest invited
     * * Guest already invited
     *
     * @see https://dev.twitch.tv/docs/api/reference#send-guest-star-invite
     */
    sendGuestStarInvite: async (
      params: SendGuestStarInviteParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 403> => 
      this.callApi({
        path: '/guest_star/invites',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Revokes a previously sent invite for a Guest Star session.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/guest_star/invites`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _session\_id_
     * * Missing _guest\_id_
     * * Invalid _session\_id_
     *
     * _404 Not Found_
     *
     * No invite exists for specified _guest\_id_
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-guest-star-invite
     */
    deleteGuestStarInvite: async (
      params: DeleteGuestStarInviteParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 404> => 
      this.callApi({
        path: '/guest_star/invites',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Allows a previously invited user to be assigned a slot within the active Guest Star session, once that guest has indicated they are ready to join.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/guest_star/slot`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfuly assigned guest to slot
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _moderator\_id_
     * * Missing _guest\_id_
     * * Missing or invalid _session\_id_
     * * Missing or invalid _slot\_id_
     *
     * _401 Unauthorized_
     *
     * _moderator\_id_ is not a guest star moderator
     *
     * _403 Forbidden_
     *
     * * Cannot assign host slot
     * * Guest not invited to session
     * * Guest already assigned to slot
     * * Guest is not ready to join
     *
     * @see https://dev.twitch.tv/docs/api/reference#assign-guest-star-slot
     */
    assignGuestStarSlot: async (
      params: AssignGuestStarSlotParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403> => 
      this.callApi({
        path: '/guest_star/slot',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Allows a user to update the assigned slot for a particular user within the active Guest Star session.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/guest_star/slot`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfuly updated slot(s)
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing or invalid _session\_id_
     * * Missing or invalid _slot\_id_
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-guest-star-slot
     */
    updateGuestStarSlot: async (
      params: UpdateGuestStarSlotParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400> => 
      this.callApi({
        path: '/guest_star/slot',
        method: 'PATCH',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Allows a caller to remove a slot assignment from a user participating in an active Guest Star session. This revokes their access to the session immediately and disables their access to publish or subscribe to media within the session.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/guest_star/slot`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfuly removed user from slot
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _moderator\_id_
     * * Missing or invalid _session\_id_
     * * Missing or invalid _slot\_id_
     *
     * _403 Forbidden_
     *
     * * _moderator\_id_ is not a Guest Star moderator
     * * The request is attempting to modify a restricted slot
     *
     * _404 Not Found_
     *
     * _guest\_id_ or _slot\_id_ not found
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-guest-star-slot
     */
    deleteGuestStarSlot: async (
      params: DeleteGuestStarSlotParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 403 | 404> => 
      this.callApi({
        path: '/guest_star/slot',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Allows a user to update slot settings for a particular guest within a Guest Star session, such as allowing the user to share audio or video within the call as a host. These settings will be broadcasted to all subscribers which control their view of the guest in that slot. One or more of the optional parameters to this API can be specified at any time.
     *
     * __Authorization:__
     *
     * * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/guest_star/slot_settings`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfuly updated slot settings
     *
     * _400 Bad Request_
     *
     * * Missing _broadcaster\_id_
     * * Missing _moderator\_id_
     * * Missing or invalid _session\_id_
     * * Missing or invalid _slot\_id_
     *
     * _403 Forbidden_
     *
     * * _moderator\_id_ is not a Guest Star moderator
     * * The request is attempting to modify a restricted slot
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-guest-star-slot-settings
     */
    updateGuestStarSlotSettings: async (
      params: UpdateGuestStarSlotSettingsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 403> => 
      this.callApi({
        path: '/guest_star/slot_settings',
        method: 'PATCH',
        params,
        clientId,
        accessToken,
      }),
  };
  hypeTrain = {
    /**
     * Gets information about the broadcaster’s current or most recent Hype Train event.
     *
     * Instead of polling for events, consider [subscribing](https://dev.twitch.tv/docs/eventsub/manage-subscriptions) to Hype Train events ([Begin](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype%5Ftrainbegin), [Progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype%5Ftrainprogress), [End](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype%5Ftrainend)).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:hype\_train** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/hypetrain/events`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s Hype Train events.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the _user\_id_ in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:hype\_train** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-hype-train-events
     */
    getHypeTrainEvents: async (
      params: GetHypeTrainEventsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetHypeTrainEventsResponse, 200, 401> => 
      this.callApi({
        path: '/hypetrain/events',
        params,
        clientId,
        accessToken,
      }),
  };
  moderation = {
    /**
     * Checks whether AutoMod would flag the specified message for review.
     *
     * AutoMod is a moderation tool that holds inappropriate or harassing chat messages for moderators to review. Moderators approve or deny the messages that AutoMod flags; only approved messages are released to chat. AutoMod detects misspellings and evasive language automatically. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).
     *
     * **Rate Limits**: Rates are limited per channel based on the account type rather than per access token.
     *
     * | Account type | Limit per minute | Limit per hour |
     * | - | - | - |
     * | Normal | 5 | 50 |
     * | Affiliate | 10 | 100 |
     * | Partner | 30 | 300 |
     *
     *
     * The above limits are in addition to the standard [Twitch API rate limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits). The rate limit headers in the response represent the Twitch rate limits and not the above limits.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/moderation/enforcements/status`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully checked the messages.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The `data` field is required and the list must contain one or more messages to check.
     * * The `msg_id` field is required.
     * * The `msg_text` field is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderation:read** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The ID in _broadcaster\_id_ must match the user ID in the user access token.
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster exceeded the number of chat message checks that they may make. See the endpoint's rate limits.
     *
     * @see https://dev.twitch.tv/docs/api/reference#check-automod-status
     */
    checkAutoModStatus: async (
      params: CheckAutoModStatusParams,
      body: CheckAutoModStatusBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CheckAutoModStatusResponse, 200, 400 | 401 | 403 | 429> => 
      this.callApi({
        path: '/moderation/enforcements/status',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Allow or deny the message that AutoMod flagged for review. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).
     *
     * To get messages that AutoMod is holding for review, subscribe to the **automod-queue.<moderator\_id>.<channel\_id>** [topic](https://dev.twitch.tv/docs/pubsub#topics) using [PubSub](https://dev.twitch.tv/docs/pubsub). PubSub sends a notification to your app when AutoMod holds a message for review.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:automod** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/moderation/automod/message`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully approved or denied the message.
     *
     * _400 Bad Request_
     *
     * * The value in the `action` field is not valid.
     * * The `user_id` field is required.
     * * The `msg_id` field is required.
     * * The `action` field is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in `user_id` must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:automod** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _user\_id_ is not one of the broadcaster's moderators.
     *
     * _404 Not Found_
     *
     * * The message specified in the `msg_id` field was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#manage-held-automod-messages
     */
    manageHeldAutoModMessages: async (
      body: ManageHeldAutoModMessagesBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 404> => 
      this.callApi({
        path: '/moderation/automod/message',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:automod\_settings** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/moderation/automod/settings`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s AutoMod settings.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:read:automod\_settings** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-automod-settings
     */
    getAutoModSettings: async (
      params: GetAutoModSettingsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetAutoModSettingsResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/automod/settings',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:automod\_settings** scope.
     *
     * __Request Body:__
     *
     * Because PUT is an overwrite operation, you must include all the fields that you want set after the operation completes. Typically, you’ll send a GET request, update the fields you want to change, and pass that object in the PUT request.
     *
     * You may set either `overall_level` or the individual settings like `aggression`, but not both.
     *
     * Setting `overall_level` applies default values to the individual settings. However, setting `overall_level` to 4 does not necessarily mean that it applies 4 to all the individual settings. Instead, it applies a set of recommended defaults to the rest of the settings. For example, if you set `overall_level` to 2, Twitch provides some filtering on discrimination and sexual content, but more filtering on hostility (see the first example response).
     *
     * If `overall_level` is currently set and you update `swearing` to 3, `overall_level` will be set to **null** and all settings other than `swearing` will be set to 0\. The same is true if individual settings are set and you update `overall_level` to 3 — all the individual settings are updated to reflect the default level.
     *
     * Note that if you set all the individual settings to values that match what `overall_level` would have set them to, Twitch changes AutoMod to use the default AutoMod level instead of using the individual settings.
     *
     * Valid values for all levels are from 0 (no filtering) through 4 (most aggressive filtering). These levels affect how aggressively AutoMod holds back messages for moderators to review before they appear in chat or are denied (not shown).
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/moderation/automod/settings`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the broadcaster’s AutoMod settings.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ is required.
     * * The _moderator\_id_ is required.
     * * The `overall_level` setting or one or more individual settings like `aggression` is required; the overall and individual settings are mutually exclusive, so don't set both.
     * * The value of one or more AutoMod settings is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:automod\_settings** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-automod-settings
     */
    updateAutoModSettings: async (
      params: UpdateAutoModSettingsParams,
      body: UpdateAutoModSettingsBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateAutoModSettingsResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/automod/settings',
        method: 'PUT',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets all users that the broadcaster banned or put in a timeout.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** or **moderator:manage:banned\_users** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/moderation/banned`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of banned users.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderation:read** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-banned-users
     */
    getBannedUsers: async (
      params: GetBannedUsersParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetBannedUsersResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/moderation/banned',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Bans a user from participating in the specified broadcaster’s chat room or puts them in a timeout.
     *
     * For information about banning or putting users in a timeout, see [Ban a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheBanFeature) and [Timeout a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheTimeoutFeature).
     *
     * If the user is currently in a timeout, you can call this endpoint to change the duration of the timeout or ban them altogether. If the user is currently banned, you cannot call this method to put them in a timeout instead.
     *
     * To remove a ban or end a timeout, see [Unban user](https://dev.twitch.tv/docs/api/reference#unban-user).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:banned\_users** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/moderation/bans`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully banned the user or placed them in a timeout.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     * * The `user_id` field is required.
     * * The text in the `reason` field is too long.
     * * The value in the `duration` field is not valid.
     * * The user specified in the `user_id` field may not be banned.
     * * The user specified in the `user_id` field may not be put in a timeout.
     * * The user specified in the `user_id` field is already banned.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:banned\_users** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * _409 Conflict_
     *
     * * You may not update the user's ban state while someone else is updating the state. For example, someone else is currently banning the user or putting them in a timeout, moving the user from a timeout to a ban, or removing the user from a ban or timeout. Please retry your request.
     *
     * _429 Too Many Requests_
     *
     * * The app has exceeded the number of requests it may make per minute for this broadcaster.
     *
     * @see https://dev.twitch.tv/docs/api/reference#ban-user
     */
    banUser: async (
      params: BanUserParams,
      body: BanUserBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<BanUserResponse, 200, 400 | 401 | 403 | 409 | 429> => 
      this.callApi({
        path: '/moderation/bans',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Removes the ban or timeout that was placed on the specified user.
     *
     * To ban a user, see [Ban user](https://dev.twitch.tv/docs/api/reference#ban-user).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:banned\_users** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/moderation/bans`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the ban or timeout.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     * * The _user\_id_ query parameter is required.
     * * The user specified in the _user\_id_ query parameter is not banned.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:banned\_users** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * _409 Conflict_
     *
     * * You may not update the user's ban state while someone else is updating the state. For example, someone else is currently removing the ban or timeout, or they're moving the user from a timeout to a ban. Please retry your request.
     *
     * _429 Too Many Requests_
     *
     * * The app has exceeded the number of requests it may make per minute for this broadcaster.
     *
     * @see https://dev.twitch.tv/docs/api/reference#unban-user
     */
    unbanUser: async (
      params: UnbanUserParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 409 | 429> => 
      this.callApi({
        path: '/moderation/bans',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s list of non-private, blocked words or phrases. These are the terms that the broadcaster or moderator added manually or that were denied by AutoMod.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:blocked\_terms** or **moderator:manage:blocked\_terms** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/moderation/blocked_terms`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of blocked terms.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header must contain a user access token.
     * * The user access token must include the **moderator:read:blocked\_terms** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-blocked-terms
     */
    getBlockedTerms: async (
      params: GetBlockedTermsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetBlockedTermsResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/blocked_terms',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Adds a word or phrase to the broadcaster’s list of blocked terms. These are the terms that the broadcaster doesn’t want used in their chat room.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:blocked\_terms** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/moderation/blocked_terms`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of blocked terms.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     * * The `text` field is required.
     * * The length of the term in the `text` field is either too short or too long.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:blocked\_terms** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#add-blocked-term
     */
    addBlockedTerm: async (
      params: AddBlockedTermParams,
      body: AddBlockedTermBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<AddBlockedTermResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/blocked_terms',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Removes the word or phrase from the broadcaster’s list of blocked terms.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:blocked\_terms** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/moderation/blocked_terms`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the blocked term. Also returned if the ID is not found.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _moderator\_id_ query parameter is required.
     * * The _id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:blocked\_terms** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#remove-blocked-term
     */
    removeBlockedTerm: async (
      params: RemoveBlockedTermParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/blocked_terms',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Removes a single chat message or all chat messages from the broadcaster’s chat room.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/moderation/chat`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the specified messages.
     *
     * _400 Bad Request_
     *
     * * You may not delete another moderator's messages.
     * * You may not delete the broadcaster's messages.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token is missing the **moderator:manage:chat\_messages** scope.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * _404 Not Found_
     *
     * * The ID in _message\_id_ was not found.
     * * The specified message was created more than 6 hours ago.
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-chat-messages
     */
    deleteChatMessages: async (
      params: DeleteChatMessagesParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 404> => 
      this.callApi({
        path: '/moderation/chat',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * BETA Gets a list of channels that the specified user has moderator privileges in.
     *
     * __Authorization:__
     *
     * * Query parameter `user_id` must match the user ID in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
     * * Requires OAuth Scope: `user:read:moderated_channels`
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/moderation/channels`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of moderated channels.
     *
     * _400 Bad Request_
     *
     * _401 Unauthorized_
     *
     * _500 Internal Server Error_
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-moderated-channels
     */
    getModeratedChannels: async (
      params: GetModeratedChannelsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetModeratedChannelsResponse, 200, 400 | 401 | 500> => 
      this.callApi({
        path: '/moderation/channels',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets all users allowed to moderate the broadcaster’s chat room.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** scope. If your app also adds and removes moderators, you can use the **channel:manage:moderators** scope instead.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/moderation/moderators`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of moderators.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID found in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderation:read** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-moderators
     */
    getModerators: async (
      params: GetModeratorsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetModeratorsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/moderation/moderators',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Adds a moderator to the broadcaster’s chat room.
     *
     * **Rate Limits**: The broadcaster may add a maximum of 10 moderators within a 10-second window.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:moderators** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/moderation/moderators`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully added the moderator.
     *
     * _400 Bad Request_
     *
     * * The ID in _broadcaster\_id_ was not found.
     * * The ID in _user\_id_ was not found.
     * * The user in _user\_id_ is already a moderator in the broadcaster's chat room.
     * * The user in _user\_id_ cannot become a moderator because they're banned from the channel.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:moderators** scope.
     * * The access token is not valid.
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _422 Unprocessable Entity_
     *
     * * The user in _user\_id_ is a VIP. To make them a moderator, you must first remove them as a VIP (see [Remove Channel VIP](https://dev.twitch.tv/docs/api/reference#remove-channel-vip)).
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster has exceeded the number of requests allowed within a 10-second window. See this endpoint's rate limits.
     *
     * @see https://dev.twitch.tv/docs/api/reference#add-channel-moderator
     */
    addChannelModerator: async (
      params: AddChannelModeratorParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 422 | 429> => 
      this.callApi({
        path: '/moderation/moderators',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Removes a moderator from the broadcaster’s chat room.
     *
     * **Rate Limits**: The broadcaster may remove a maximum of 10 moderators within a 10-second window.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:moderators** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/moderation/moderators`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the moderator.
     *
     * _400 Bad Request_
     *
     * * The ID in _broadcaster\_id_ was not found.
     * * The ID in _user\_id_ was not found.
     * * The user in _user\_id_ is not a moderator in the broadcaster's chat room.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:moderators** scope.
     * * The access token is not valid.
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster has exceeded the number of requests allowed within a 10-second window. See this endpoint's rate limits.
     *
     * @see https://dev.twitch.tv/docs/api/reference#remove-channel-moderator
     */
    removeChannelModerator: async (
      params: RemoveChannelModeratorParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 429> => 
      this.callApi({
        path: '/moderation/moderators',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of the broadcaster’s VIPs.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:vips** scope. If your app also adds and removes VIP status, you can use the **channel:manage:vips** scope instead.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/channels/vips`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of VIPs.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _user\_id_ query parameter is not valid.
     * * The number of _user\_id_ query parameters exceeds the maximum allowed.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:vips** or **channel:manage:vips** scope.
     * * The OAuth token is not valid.
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-vips
     */
    getVIPs: async (
      params: GetVIPsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetVIPsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/channels/vips',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Adds the specified user as a VIP in the broadcaster’s channel.
     *
     * **Rate Limits**: The broadcaster may add a maximum of 10 VIPs within a 10-second window.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:vips** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/channels/vips`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully added the VIP.
     *
     * _400 Bad Request_
     *
     * * The user in the _user\_id_ query parameter is blocked from the broadcaster's channel.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The ID in the _user\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:vips** scope.
     * * The OAuth token is not valid.
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     *
     * _404 Not Found_
     *
     * * The ID in _broadcaster\_id_ was not found.
     * * The ID in _user\_id_ was not found.
     *
     * _409 Conflict_
     *
     * The broadcaster doesn’t have available VIP slots. [Read More](https://help.twitch.tv/s/article/Managing-Roles-for-your-Channel?language=en%5FUS#types)
     *
     * _422 Unprocessable Entity_
     *
     * * The user in _user\_id_ is a moderator. To make them a VIP, you must first remove them as a moderator (see [Remove Channel Moderator](https://dev.twitch.tv/docs/api/reference#remove-channel-moderator)).
     * * The user in the _user\_id_ query parameter is already a VIP.
     *
     * _425 Too Early_
     *
     * The broadcaster must complete the Build a Community requirement before they may assign VIPs.
     *
     * _429 Too Many Requests_
     *
     * The broadcaster exceeded the number of VIP that they may add within a 10-second window. See Rate Limits for this endpoint above.
     *
     * @see https://dev.twitch.tv/docs/api/reference#add-channel-vip
     */
    addChannelVIP: async (
      params: AddChannelVIPParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 404 | 409 | 422 | 425 | 429> => 
      this.callApi({
        path: '/channels/vips',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Removes the specified user as a VIP in the broadcaster’s channel.
     *
     * If the broadcaster is removing the user’s VIP status, the ID in the _broadcaster\_id_ query parameter must match the user ID in the access token; otherwise, if the user is removing their VIP status themselves, the ID in the _user\_id_ query parameter must match the user ID in the access token.
     *
     * **Rate Limits**: The broadcaster may remove a maximum of 10 VIPs within a 10-second window.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:vips** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/channels/vips`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the VIP status from the user.
     *
     * _400 Bad Request_
     *
     * * The ID in _broadcaster\_id_ is not valid.
     * * The ID in _user\_id_ is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:vips** scope.
     * * The OAuth token is not valid.
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
     *
     * _403 Forbidden_
     *
     * * The user in _broadcaster\_id_ doesn't have permission to remove the user's VIP status.
     *
     * _404 Not Found_
     *
     * * The ID in _broadcaster\_id_ was not found.
     * * The ID in _user\_id_ was not found.
     *
     * _422 Unprocessable Entity_
     *
     * * The user in _user\_id_ is not a VIP in the broadcaster's channel.
     *
     * _429 Too Many Requests_
     *
     * The broadcaster exceeded the number of VIPs that they may remove within a 10-second window. See Rate Limits for this endpoint above.
     *
     * @see https://dev.twitch.tv/docs/api/reference#remove-channel-vip
     */
    removeChannelVIP: async (
      params: RemoveChannelVIPParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 404 | 422 | 429> => 
      this.callApi({
        path: '/channels/vips',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Activates or deactivates the broadcaster’s Shield Mode.
     *
     * Twitch’s Shield Mode feature is like a panic button that broadcasters can push to protect themselves from chat abuse coming from one or more accounts. When activated, Shield Mode applies the overrides that the broadcaster configured in the Twitch UX. If the broadcaster hasn’t configured Shield Mode, it applies default overrides.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:shield\_mode** scope.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/moderation/shield_mode`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the broadcaster’s Shield Mode status.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The `is_active` field is required.
     * * The value in the `is_active` field is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:manage:shield\_mode** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-shield-mode-status
     */
    updateShieldModeStatus: async (
      params: UpdateShieldModeStatusParams,
      body: UpdateShieldModeStatusBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateShieldModeStatusResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/shield_mode',
        method: 'PUT',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s Shield Mode activation status.
     *
     * To receive notification when the broadcaster activates and deactivates Shield Mode, subscribe to the [channel.shield\_mode.begin](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield%5Fmodebegin) and [channel.shield\_mode.end](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield%5Fmodeend) subscription types.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/moderation/shield_mode`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s Shield Mode activation status.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in _moderator\_id_ must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in _moderator\_id_ is not one of the broadcaster's moderators.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-shield-mode-status
     */
    getShieldModeStatus: async (
      params: GetShieldModeStatusParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetShieldModeStatusResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/moderation/shield_mode',
        params,
        clientId,
        accessToken,
      }),
  };
  polls = {
    /**
     * Gets a list of polls that the broadcaster created.
     *
     * Polls are available for 90 days after they’re created.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:polls** or **channel:manage:polls** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/polls`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s polls.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token is missing the **channel:read:polls** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header must match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * None of the IDs in the _id_ query parameters were found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-polls
     */
    getPolls: async (
      params: GetPollsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetPollsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/polls',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Creates a poll that viewers in the broadcaster’s channel can vote on.
     *
     * The poll begins as soon as it’s created. You may run only one poll at a time.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:polls** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/polls`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully created the poll.
     *
     * _400 Bad Request_
     *
     * * The `broadcaster_id` field is required.
     * * The `title` field is required.
     * * The `choices` field is required.
     * * The `duration` field is required.
     * * The value in `duration` is outside the allowed range of values.
     * * The value in `channel_points_per_vote` is outside the allowed range of values.
     * * The value in `bits_per_vote` is outside the allowed range of values.
     * * The poll's `title` is too long.
     * * The choice's `title` is too long.
     * * The choice's `title` failed AutoMod checks.
     * * The number of choices in the poll may not be less than 2 or greater that 5.
     * * The broadcaster already has a poll that's running; you may not create another poll until the current poll completes.
     *
     * _401 Unauthorized_
     *
     * * The ID in `broadcaster_id` must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token is missing the **channel:manage:polls** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-poll
     */
    createPoll: async (
      body: CreatePollBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreatePollResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/polls',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Ends an active poll. You have the option to end it or end it and archive it.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:polls** scope.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/polls`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully ended the poll.
     *
     * _400 Bad Request_
     *
     * * The `broadcaster_id` field is required.
     * * The `id` field is required.
     * * The `status` field is required.
     * * The value in the `status` field is not valid.
     * * The poll must be active to terminate or archive it.
     *
     * _401 Unauthorized_
     *
     * * The ID in `broadcaster_id` must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:polls** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header must match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#end-poll
     */
    endPoll: async (
      body: EndPollBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<EndPollResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/polls',
        method: 'PATCH',
        body,
        clientId,
        accessToken,
      }),
  };
  predictions = {
    /**
     * Gets a list of Channel Points Predictions that the broadcaster created.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:predictions** or **channel:manage:predictions** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/predictions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of predictions.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:predictions** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-predictions
     */
    getPredictions: async (
      params: GetPredictionsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetPredictionsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/predictions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Creates a Channel Points Prediction.
     *
     * With a Channel Points Prediction, the broadcaster poses a question and viewers try to predict the outcome. The prediction runs as soon as it’s created. The broadcaster may run only one prediction at a time.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:predictions** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/predictions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully created the Channel Points Prediction.
     *
     * _400 Bad Request_
     *
     * * The `broadcaster_id` field is required.
     * * The `title` field is required.
     * * The `outcomes` field is required.
     * * The `prediction_window` field is required.
     * * The value in `prediction_window` is outside the allowed range of values.
     * * The prediction's `title` is too long.
     * * The outcome's `title` is too long.
     * * The outcome's `title` failed AutoMod checks.
     * * There must be 2 outcomes in the prediction.
     * * The broadcaster already has a prediction that's running; you may not create another prediction until the current prediction is resolved or canceled.
     *
     * _401 Unauthorized_
     *
     * * The ID in `broadcaster_id` must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:predictions** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _429 Too Many Requests_
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-prediction
     */
    createPrediction: async (
      body: CreatePredictionBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreatePredictionResponse, 200, 400 | 401 | 429> => 
      this.callApi({
        path: '/predictions',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Locks, resolves, or cancels a Channel Points Prediction.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:predictions** scope.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/predictions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully ended the prediction.
     *
     * _400 Bad Request_
     *
     * * The `broadcaster_id` field is required.
     * * The `id` field is required.
     * * The `status` field is required.
     * * The `winning_outcome_id` field is required if `status` is RESOLVED.
     * * The value in the `status` field is not valid.
     * * To update the prediction's status to RESOLVED or CANCELED, its current status must be ACTIVE or LOCKED.
     * * To update the prediction's status to LOCKED, its current status must be ACTIVE.
     *
     * _401 Unauthorized_
     *
     * * The ID in `broadcaster_id` must match the user ID in the OAuth token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:predictions** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The prediction in the `id` field was not found.
     * * The outcome in the `winning_outcome_id` field was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#end-prediction
     */
    endPrediction: async (
      body: EndPredictionBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<EndPredictionResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/predictions',
        method: 'PATCH',
        body,
        clientId,
        accessToken,
      }),
  };
  raids = {
    /**
     * Raid another channel by sending the broadcaster’s viewers to the targeted channel.
     *
     * When you call the API from a chat bot or extension, the Twitch UX pops up a window at the top of the chat room that identifies the number of viewers in the raid. The raid occurs when the broadcaster clicks **Raid Now** or after the 90-second countdown expires.
     *
     * To determine whether the raid successfully occurred, you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event. For more information, see [Get notified when a raid begins](https://dev.twitch.tv/docs/api/raids#get-notified-when-a-raid-begins).
     *
     * To cancel a pending raid, use the [Cancel a raid](https://dev.twitch.tv/docs/api/reference#cancel-a-raid) endpoint.
     *
     * **Rate Limit**: The limit is 10 requests within a 10-minute window.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:raids** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/raids`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully requested to start a raid. To determine whether the raid successfully occurred (that is, the broadcaster clicked **Raid Now** or the countdown expired), you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event.
     *
     * _400 Bad Request_
     *
     * * The raiding broadcaster is blocked from the targeted channel.
     * * The targeted channel doesn't accept raids from this broadcaster.
     * * There are too many viewers in the raiding party.
     * * The IDs in _from\_broadcaster\_id_ and _to\_broadcaster\_id_ cannot be the same ID.
     * * The ID in the _from\_broadcaster\_id_ query parameter is not valid.
     * * The ID in the _to\_broadcaster\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in _from\_broadcaster\_id_ must match the user ID found in the request’s OAuth token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:raids** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The targeted channel was not found.
     *
     * _409 Conflict_
     *
     * * The broadcaster is already in the process of raiding another channel.
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster exceeded the number of raid requests that they may make. The limit is 10 requests within a 10-minute window.
     *
     * @see https://dev.twitch.tv/docs/api/reference#start-a-raid
     */
    startRaid: async (
      params: StartRaidParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<StartRaidResponse, 200, 400 | 401 | 404 | 409 | 429> => 
      this.callApi({
        path: '/raids',
        method: 'POST',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Cancel a pending raid.
     *
     * You can cancel a raid at any point up until the broadcaster clicks **Raid Now** in the Twitch UX or the 90-second countdown expires.
     *
     * **Rate Limit**: The limit is 10 requests within a 10-minute window.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:raids** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/raids`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * The pending raid was successfully canceled.
     *
     * _400 Bad Request_
     *
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID found in the request’s OAuth token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:raids** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The broadcaster doesn't have a pending raid to cancel.
     *
     * _429 Too Many Requests_
     *
     * * The broadcaster exceeded the number of raid requests that they may make. The limit is 10 requests within a 10-minute window.
     *
     * @see https://dev.twitch.tv/docs/api/reference#cancel-a-raid
     */
    cancelRaid: async (
      params: CancelRaidParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 404 | 429> => 
      this.callApi({
        path: '/raids',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
  };
  schedule = {
    /**
     * Gets the broadcaster’s streaming schedule. You can get the entire schedule or specific segments of the schedule. [Learn More](https://help.twitch.tv/s/article/channel-page-setup#Schedule)
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/schedule`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s streaming schedule.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The ID in the _id_ query parameter is not valid.
     * * The format of the date and time in the _start\_time_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify a valid app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the access token.
     *
     * _403 Forbidden_
     *
     * * Only partners and affiliates may add non-recurring broadcast segments.
     *
     * _404 Not Found_
     *
     * * The broadcaster has not created a streaming schedule.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-stream-schedule
     */
    getChannelStreamSchedule: async (
      params: GetChannelStreamScheduleParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelStreamScheduleResponse, 200, 400 | 401 | 403 | 404> => 
      this.callApi({
        path: '/schedule',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the broadcaster’s streaming schedule as an [iCalendar](https://datatracker.ietf.org/doc/html/rfc5545).
     *
     * __Authorization:__
     *
     * The Client-Id and Authorization headers are not required.
     *
     * __Response Body:__
     *
     * The response body contains the iCalendar data (see [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545)).
     *
     * The Content-Type response header is set to `text/calendar`.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/schedule/icalendar`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s schedule as an iCalendar.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-icalendar
     */
    getChannelICalendar: async (
      params: GetChannelICalendarParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<string, 200, 400> => 
      this.callApi({
        path: '/schedule/icalendar',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates the broadcaster’s schedule settings, such as scheduling a vacation.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/schedule/settings`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully updated the broadcaster’s schedule settings.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The format of the string in _vacation\_start\_time_ is not valid.
     * * The format of the string in _vacation\_end\_time_ is not valid.
     * * The date in _vacation\_end\_time_ must be later than the date in _vacation\_start\_time_.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:schedule** scope.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _404 Not Found_
     *
     * * The broadcaster's schedule was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-channel-stream-schedule
     */
    updateChannelStreamSchedule: async (
      params: UpdateChannelStreamScheduleParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 404> => 
      this.callApi({
        path: '/schedule/settings',
        method: 'PATCH',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Adds a single or recurring broadcast to the broadcaster’s streaming schedule. For information about scheduling broadcasts, see [Stream Schedule](https://help.twitch.tv/s/article/channel-page-setup#Schedule).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/schedule/segment`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully added the broadcast segment.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The format of the date and time in the `start_time` field is not valid.
     * * The value in the `timezone` field is not valid.
     * * The value in the `duration` field is not valid.
     * * The ID in the `category_id` field is not valid.
     * * The string in the `title` field is too long.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:schedule** scope.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _403 Forbidden_
     *
     * * Only partners and affiliates may add non-recurring broadcast segments.
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-channel-stream-schedule-segment
     */
    createChannelStreamScheduleSegment: async (
      params: CreateChannelStreamScheduleSegmentParams,
      body: CreateChannelStreamScheduleSegmentBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateChannelStreamScheduleSegmentResponse, 200, 400 | 401 | 403> => 
      this.callApi({
        path: '/schedule/segment',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Updates a scheduled broadcast segment.
     *
     * For recurring segments, updating a segment’s title, category, duration, and timezone, changes all segments in the recurring schedule, not just the specified segment.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
     *
     * __URL:__
     *
     * `PATCH https://api.twitch.tv/helix/schedule/segment`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the broadcast segment.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The _id_ query parameter is required.
     * * The ID in the _id_ query parameter is not valid.
     * * The format of the date and time in the `start_time` field is not valid.
     * * The value in the `timezone` field is not valid.
     * * The value in the `duration` field is not valid.
     * * The ID in the `category_id` field is not valid.
     * * The string in the `title` field is too long.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:schedule** scope.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the access token.
     *
     * _404 Not Found_
     *
     * * The specified broadcast segment was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-channel-stream-schedule-segment
     */
    updateChannelStreamScheduleSegment: async (
      params: UpdateChannelStreamScheduleSegmentParams,
      body: UpdateChannelStreamScheduleSegmentBody | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateChannelStreamScheduleSegmentResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/schedule/segment',
        method: 'PATCH',
        params,
        body,
        clientId,
        accessToken,
      }),
    /**
     * Removes a broadcast segment from the broadcaster’s streaming schedule.
     *
     * **NOTE**: For recurring segments, removing a segment removes all segments in the recurring schedule.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/schedule/segment`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the broadcast segment.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The ID in the _broadcaster\_id_ query parameter is not valid.
     * * The _id_ query parameter is required.
     * * The ID in the _id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:schedule** scope.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the client ID in the OAuth token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-channel-stream-schedule-segment
     */
    deleteChannelStreamScheduleSegment: async (
      params: DeleteChannelStreamScheduleSegmentParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/schedule/segment',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
  };
  search = {
    /**
     * Gets the games or categories that match the specified query.
     *
     * To match, the category’s name must contain all parts of the query string. For example, if the query string is 42, the response includes any category name that contains 42 in the title. If the query string is a phrase like _love computer_, the response includes any category name that contains the words love and computer anywhere in the name. The comparison is case insensitive.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/search/categories`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of category names that matched the specified query string.
     *
     * _400 Bad Request_
     *
     * * The _query_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#search-categories
     */
    searchCategories: async (
      params: SearchCategoriesParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<SearchCategoriesResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/search/categories',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the channels that match the specified query and have streamed content within the past 6 months.
     *
     * The fields that the API uses for comparison depends on the value that the _live\_only_ query parameter is set to. If _live\_only_ is **false**, the API matches on the broadcaster’s login name. However, if _live\_only_ is **true**, the API matches on the broadcaster’s name and category name.
     *
     * To match, the beginning of the broadcaster’s name or category must match the query string. The comparison is case insensitive. If the query string is angel\_of\_death, it matches all names that begin with angel\_of\_death. However, if the query string is a phrase like _angel of death_, it matches to names starting with angelofdeath or names starting with angel\_of\_death.
     *
     * By default, the results include both live and offline channels. To get only live channels set the _live\_only_ query parameter to **true**.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/search/channels`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of category names that matched the specified query string.
     *
     * _400 Bad Request_
     *
     * * The _query_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#search-channels
     */
    searchChannels: async (
      params: SearchChannelsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<SearchChannelsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/search/channels',
        params,
        clientId,
        accessToken,
      }),
  };
  streams = {
    /**
     * Gets the channel’s stream key.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:stream\_key** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/streams/key`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the stream’s key.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ field is required.
     * * The ID in the _broadcaster\_id_ field is not valid.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:stream\_key** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header must match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-stream-key
     */
    getStreamKey: async (
      params: GetStreamKeyParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetStreamKeyResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/streams/key',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of all streams. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/streams`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of streams.
     *
     * _400 Bad Request_
     *
     * * The value in the _type_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-streams
     */
    getStreams: async (
      params: GetStreamsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetStreamsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/streams',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the list of broadcasters that the user follows and that are streaming live.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:follows** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/streams/followed`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of broadcasters that the user follows and that are streaming live.
     *
     * _400 Bad Request_
     *
     * * The _user\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _user\_id_ must match the user ID found in the access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:read:follows** scope.
     * * The OAuth token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-followed-streams
     */
    getFollowedStreams: async (
      params: GetFollowedStreamsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetFollowedStreamsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/streams/followed',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Adds a marker to a live stream. A marker is an arbitrary point in a live stream that the broadcaster or editor wants to mark, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).
     *
     * You may not add markers:
     *
     * * If the stream is not live
     * * If the stream has not enabled video on demand (VOD)
     * * If the stream is a premiere (a live, first-viewing event that combines uploaded videos with live chat)
     * * If the stream is a rerun of a past broadcast, including past premieres.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:broadcast** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/streams/markers`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully created the marker.
     *
     * _400 Bad Request_
     *
     * * The `user_id` field is required.
     * * The length of the string in the `description` field is too long.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:manage:broadcast** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in the access token is not authorized to create video markers for the user in the `user_id` field. The user in the access token must own the video or they must be one of the broadcaster's editors.
     *
     * _404 Not Found_
     *
     * * The user in the `user_id` field is not streaming live.
     * * The ID in the user\_id field is not valid.
     * * The user hasn't enabled video on demand (VOD).
     *
     * @see https://dev.twitch.tv/docs/api/reference#create-stream-marker
     */
    createStreamMarker: async (
      body: CreateStreamMarkerBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CreateStreamMarkerResponse, 200, 400 | 401 | 403 | 404> => 
      this.callApi({
        path: '/streams/markers',
        method: 'POST',
        body,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of markers from the user’s most recent stream or from the specified VOD/video. A marker is an arbitrary point in a live stream that the broadcaster or editor marked, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:broadcast** or **channel:manage:broadcast** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/streams/markers`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of markers.
     *
     * _400 Bad Request_
     *
     * * The request must specify either the _user\_id_ or _video\_id_ query parameter, but not both.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:read:broadcast** or **user:manage:broadcast** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * The user in the access token is not authorized to get the video's markers. The user in the access token must own the video or be one of the broadcaster's editors.
     *
     * _404 Not Found_
     *
     * * The user specified in the _user\_id_ query parameter doesn't have videos.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-stream-markers
     */
    getStreamMarkers: async (
      params: GetStreamMarkersParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetStreamMarkersResponse, 200, 400 | 401 | 403 | 404> => 
      this.callApi({
        path: '/streams/markers',
        params,
        clientId,
        accessToken,
      }),
  };
  subscriptions = {
    /**
     * Gets a list of users that subscribe to the specified broadcaster.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:subscriptions** scope.
     *
     * A Twitch extensions may use an app access token if the broadcaster has granted the **channel:read:subscriptions** scope from within the Twitch Extensions manager.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/subscriptions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of subscribers.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID found in the request’s OAuth token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:read:subscriptions** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions
     */
    getBroadcasterSubscriptions: async (
      params: GetBroadcasterSubscriptionsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetBroadcasterSubscriptionsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/subscriptions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Checks whether the user subscribes to the broadcaster’s channel.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:subscriptions** scope.
     *
     * A Twitch extensions may use an app access token if the broadcaster has granted the **user:read:subscriptions** scope from within the Twitch Extensions manager.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/subscriptions/user`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * The user subscribes to the broadcaster.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     * * The _user\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _user\_id_ must match the user ID found in the request’s OAuth token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:read:subscriptions** scope.
     * * The access token is not valid.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The user in _user\_id_ does not subscribe to the broadcaster in _broadcaster\_id_.
     *
     * @see https://dev.twitch.tv/docs/api/reference#check-user-subscription
     */
    checkUserSubscription: async (
      params: CheckUserSubscriptionParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<CheckUserSubscriptionResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/subscriptions/user',
        params,
        clientId,
        accessToken,
      }),
  };
  tags = {
    /**
     * **IMPORTANT** Twitch is moving from Twitch-defined tags to channel-defined tags. **IMPORTANT** As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response.
     *
     * Gets a list of all stream tags that Twitch defines. The broadcaster may apply any of these to their channel except automatic tags. For an online list of the possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags).
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/tags/streams`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of tags.
     *
     * _400 Bad Request_
     *
     * * The _tag\_id_ query parameter is empty (for example, `&tag_id=`).
     * * The list of tag IDs is too long.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-all-stream-tags
     */
    getAllStreamTags: async (
      params: GetAllStreamTagsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetAllStreamTagsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/tags/streams',
        params,
        clientId,
        accessToken,
      }),
    /**
     * **IMPORTANT** Twitch is moving from Twitch-defined tags to channel-defined tags. **IMPORTANT** As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response. If you use this endpoint, please update your code to use [Get Channel Information](https://dev.twitch.tv/docs/api/reference#get-channel-information).
     *
     * Gets the list of stream tags that the broadcaster or Twitch added to their channel.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/streams/tags`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of tags.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ field is required.
     * * The ID in the _broadcaster\_id_ field is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must specify an app access token or user access token.
     * * The access token is not valid.
     * * The ID in the Client-Id header must match the Client ID in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-stream-tags
     */
    getStreamTags: async (
      params: GetStreamTagsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetStreamTagsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/streams/tags',
        params,
        clientId,
        accessToken,
      }),
  };
  teams = {
    /**
     * Gets the list of Twitch teams that the broadcaster is a member of.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/teams/channel`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of teams.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is missing or invalid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header must contain an app access token or user access token.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The broadcaster was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-channel-teams
     */
    getChannelTeams: async (
      params: GetChannelTeamsParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetChannelTeamsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/teams/channel',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets information about the specified Twitch team. [Read More](https://help.twitch.tv/s/article/twitch-teams)
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/teams`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the team’s information.
     *
     * _400 Bad Request_
     *
     * * The _name_ or _id_ query parameter is required.
     * * Specify either the _name_ or _id_ query parameter but not both.
     * * The ID in the _id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header must contain an app access token or user access token.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The specified team was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-teams
     */
    getTeams: async (
      params: GetTeamsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetTeamsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/teams',
        params,
        clientId,
        accessToken,
      }),
  };
  users = {
    /**
     * Gets information about one or more users.
     *
     * You may look up users using their user ID, login name, or both but the sum total of the number of users you may look up is 100\. For example, you may specify 50 IDs and 50 names or 100 IDs or names, but you cannot specify 100 IDs and 100 names.
     *
     * If you don’t specify IDs or login names, the request returns information about the user in the access token if you specify a user access token.
     *
     * To include the user’s verified email address in the response, you must use a user access token that includes the **user:read:email** scope.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/users`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the specified users’ information.
     *
     * _400 Bad Request_
     *
     * * The _id_ or _login_ query parameter is required unless the request uses a user access token.
     * * The request exceeded the maximum allowed number of _id_ and/or _login_ query parameters.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-users
     */
    getUsers: async (
      params: GetUsersParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetUsersResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/users',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates the specified user’s information. The user ID in the OAuth token identifies the user whose information you want to update.
     *
     * To include the user’s verified email address in the response, the user access token must also include the **user:read:email** scope.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:edit** scope.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/users`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the specified user’s information.
     *
     * _400 Bad Request_
     *
     * * The string in the _description_ query parameter is too long.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:edit** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-user
     */
    updateUser: async (
      params: UpdateUserParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateUserResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/users',
        method: 'PUT',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets the list of users that the broadcaster has blocked. [Read More](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en%5FUS#BlockWhispersandMessagesfromStrangers)
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:blocked\_users** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/users/blocks`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the broadcaster’s list of blocked users.
     *
     * _400 Bad Request_
     *
     * * The _broadcaster\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The ID in _broadcaster\_id_ must match the user ID found in the request’s access token.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:read:blocked\_users** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-user-block-list
     */
    getUserBlockList: async (
      params: GetUserBlockListParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetUserBlockListResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/users/blocks',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Blocks the specified user from interacting with or having contact with the broadcaster. The user ID in the OAuth token identifies the broadcaster who is blocking the user.
     *
     * To learn more about blocking users, see [Block Other Users on Twitch](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en%5FUS#BlockWhispersandMessagesfromStrangers).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:blocked\_users** scope.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/users/blocks`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully blocked the user.
     *
     * _400 Bad Request_
     *
     * * The _target\_user\_id_ query parameter is required.
     * * The ID in _target\_user\_id_ cannot be the same as the user ID in the access token.
     * * The value in _source\_context_ is not valid.
     * * The value in _reason_ is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:manage:blocked\_users** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#block-user
     */
    blockUser: async (
      params: BlockUserParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/users/blocks',
        method: 'PUT',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Removes the user from the broadcaster’s list of blocked users. The user ID in the OAuth token identifies the broadcaster who’s removing the block.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:blocked\_users** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/users/blocks`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully removed the block.
     *
     * _400 Bad Request_
     *
     * * The _target\_user\_id_ query parameter is required.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:read:blocked\_users** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#unblock-user
     */
    unblockUser: async (
      params: UnblockUserParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401> => 
      this.callApi({
        path: '/users/blocks',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Gets a list of all extensions (both active and inactive) that the broadcaster has installed. The user ID in the access token identifies the broadcaster.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:broadcast** or **user:edit:broadcast** scope. To include inactive extensions, you must include the **user:edit:broadcast** scope.
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/users/extensions/list`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the user’s installed extensions.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:read:broadcast** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-user-extensions
     */
    getUserExtensions: async (accessToken = '', clientId = ''): ApiResponse<GetUserExtensionsResponse, 200, 401> => 
      this.callApi({
        path: '/users/extensions/list',
        clientId,
        accessToken,
      }),
    /**
     * Gets the active extensions that the broadcaster has installed for each configuration.
     *
     * NOTE: To include extensions that you have under development, you must specify a user access token that includes the **user:read:broadcast** or **user:edit:broadcast** scope.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/users/extensions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the user’s active extensions.
     *
     * _400 Bad Request_
     *
     * * The _user\_id_ query parameter is required if you specify an app access token.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-user-active-extensions
     */
    getUserActiveExtensions: async (
      params: GetUserActiveExtensionsParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetUserActiveExtensionsResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/users/extensions',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Updates an installed extension’s information. You can update the extension’s activation state, ID, and version number. The user ID in the access token identifies the broadcaster whose extensions you’re updating.
     *
     * NOTE: If you try to activate an extension under multiple extension types, the last write wins (and there is no guarantee of write order).
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:edit:broadcast** scope.
     *
     * __URL:__
     *
     * `PUT https://api.twitch.tv/helix/users/extensions`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully updated the active extensions.
     *
     * _400 Bad Request_
     *
     * * The JSON payload is malformed.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:edit:broadcast** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * An extension with the specified `id` and `version` values was not found.
     *
     * @see https://dev.twitch.tv/docs/api/reference#update-user-extensions
     */
    updateUserExtensions: async (
      body: UpdateUserExtensionsBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<UpdateUserExtensionsResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/users/extensions',
        method: 'PUT',
        body,
        clientId,
        accessToken,
      }),
  };
  videos = {
    /**
     * Gets information about one or more published videos. You may get videos by ID, by user, or by game/category.
     *
     * You may apply several filters to get a subset of the videos. The filters are applied as an AND operation to each video. For example, if _language_ is set to ‘de’ and _game\_id_ is set to 21779, the response includes only videos that show playing League of Legends by users that stream in German. The filters apply only if you get videos by user ID or game ID.
     *
     * __Authorization:__
     *
     * Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
     *
     * __URL:__
     *
     * `GET https://api.twitch.tv/helix/videos`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully retrieved the list of videos.
     *
     * _400 Bad Request_
     *
     * * The request must specify either the _id_ or _user\_id_ or _game\_id_ query parameter.
     * * The _id_, _user\_id_, and _game\_id_ query parameters are mutually exclusive; you must specify only one of them.
     * * The value in the _id_ query parameter is not valid.
     * * The ID in the _game\_id_ query parameter is not valid.
     * * The value in the _type_ query parameter is not valid.
     * * The value in the _period_ query parameter is not valid.
     * * The value in the _sort_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The Authorization header is required and must contain an app access token or user access token.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _404 Not Found_
     *
     * * The ID in the _game\_id_ query parameter was not found.
     * * The ID in the _id_ query parameter was not found. Returned only if all the IDs were not found; otherwise, the ID is ignored.
     *
     * @see https://dev.twitch.tv/docs/api/reference#get-videos
     */
    getVideos: async (
      params: GetVideosParams | null | undefined = null,
      accessToken = '',
      clientId = '',
    ): ApiResponse<GetVideosResponse, 200, 400 | 401 | 404> => 
      this.callApi({
        path: '/videos',
        params,
        clientId,
        accessToken,
      }),
    /**
     * Deletes one or more videos. You may delete past broadcasts, highlights, or uploads.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:videos** scope.
     *
     * __URL:__
     *
     * `DELETE https://api.twitch.tv/helix/videos`
     *
     * __Response Codes:__
     *
     * _200 OK_
     *
     * Successfully deleted the list of videos.
     *
     * _400 Bad Request_
     *
     * * The _id_ query parameter is required.
     * * The request exceeded the number of allowed _id_ query parameters.
     *
     * _401 Unauthorized_
     *
     * * The caller is not authorized to delete the specified video.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **channel:manage:videos** scope.
     * * The access token is not valid.
     * * The ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * @see https://dev.twitch.tv/docs/api/reference#delete-videos
     */
    deleteVideos: async (
      params: DeleteVideosParams,
      accessToken = '',
      clientId = '',
    ): ApiResponse<DeleteVideosResponse, 200, 400 | 401> => 
      this.callApi({
        path: '/videos',
        method: 'DELETE',
        params,
        clientId,
        accessToken,
      }),
  };
  whispers = {
    /**
     * Sends a whisper message to the specified user.
     *
     * NOTE: The user sending the whisper must have a verified phone number (see the **Phone Number** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).
     *
     * NOTE: The API may silently drop whispers that it suspects of violating Twitch policies. (The API does not indicate that it dropped the whisper; it returns a 204 status code as if it succeeded.)
     *
     * **Rate Limits**: You may whisper to a maximum of 40 unique recipients per day. Within the per day limit, you may whisper a maximum of 3 whispers per second and a maximum of 100 whispers per minute.
     *
     * __Authorization:__
     *
     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:whispers** scope.
     *
     * __URL:__
     *
     * `POST https://api.twitch.tv/helix/whispers`
     *
     * __Response Codes:__
     *
     * _204 No Content_
     *
     * Successfully sent the whisper message or the message was silently dropped.
     *
     * _400 Bad Request_
     *
     * * The ID in the _from\_user\_id_ and _to\_user\_id_ query parameters must be different.
     * * The `message` field must not contain an empty string.
     * * The user that you're sending the whisper to doesn't allow whisper messages (see the **Block Whispers from Strangers** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).
     * * Whisper messages may not be sent to suspended users.
     * * The ID in the _from\_user\_id_ query parameter is not valid.
     * * The ID in the _to\_user\_id_ query parameter is not valid.
     *
     * _401 Unauthorized_
     *
     * * The user in the _from\_user\_id_ query parameter must have a verified phone number.
     * * The Authorization header is required and must contain a user access token.
     * * The user access token must include the **user:manage:whispers** scope.
     * * The access token is not valid.
     * * This ID in _from\_user\_id_ must match the user ID in the user access token.
     * * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
     *
     * _403 Forbidden_
     *
     * * Suspended users may not send whisper messages.
     * * The account that's sending the message doesn't allow sending whispers.
     *
     * _404 Not Found_
     *
     * * The ID in _to\_user\_id_ was not found.
     *
     * _429 Too Many Requests_
     *
     * * The sending user exceeded the number of whisper requests that they may make. See Rate Limits for this endpoint above.
     *
     * @see https://dev.twitch.tv/docs/api/reference#send-whisper
     */
    sendWhisper: async (
      params: SendWhisperParams,
      body: SendWhisperBody,
      accessToken = '',
      clientId = '',
    ): ApiResponse<void, 204, 400 | 401 | 403 | 404 | 429> => 
      this.callApi({
        path: '/whispers',
        method: 'POST',
        params,
        body,
        clientId,
        accessToken,
      }),
  };
}
