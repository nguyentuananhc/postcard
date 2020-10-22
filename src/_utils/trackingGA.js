import { Event, PageView } from 'containers/QuizApp/components/Tracking'
import { EVENT_GA } from 'containers/QuizApp/const'

const CAMPAIGN_NAME = '2010quiz'

export const clickStart = () => {
    Event(`${CAMPAIGN_NAME}_START`, 'CLICK', `${CAMPAIGN_NAME}_START`)
}

export const clickSelect = (qindex, aindex) => {
    Event(`${CAMPAIGN_NAME}_SELECT`, 'CLICK', `Q${qindex}_${aindex}`)
}

export const clickShare = (index) => {
    Event(`${CAMPAIGN_NAME}_SHARE`, 'CLICK', `${CAMPAIGN_NAME}_Label_${index}`)
}

export const clickBack = (index) => {
    Event(
        `${CAMPAIGN_NAME}_CLICK_BACK`,
        'CLICK',
        `${CAMPAIGN_NAME}_CLICK_BACK_${index}}`
    )
}

export const clickRetake = () => {
    Event(`${CAMPAIGN_NAME}_RETAKE`, 'CLICK', `${CAMPAIGN_NAME}__RETAKE}`)
}

export const clickFloatingButton = () => {
    Event(
        `${CAMPAIGN_NAME}_CLICK_FLOATING_BUTTON`,
        'CLICK',
        `${CAMPAIGN_NAME}_CLICK_FLOATING_BUTTON}`
    )
}

export const clickSwitch = () => {
    Event(`${CAMPAIGN_NAME}_SWITCH`, 'CLICK', `${CAMPAIGN_NAME}_SWITCH}`)
}

export const clickMerchant = (id) => {
    Event(
        `${CAMPAIGN_NAME}_Click_View_Merchant`,
        'CLICK',
        `${CAMPAIGN_NAME}_Merchant_${id}`
    )
}

export const clickVisitMerchant = (merchantId) => {
    Event(
        `${CAMPAIGN_NAME}_Click_Ghe_tham`,
        `CLICK`,
        `${CAMPAIGN_NAME}_${merchantId}`
    )
}

export const clickProduct = (merchantId, productId) => {
    Event(
        `${CAMPAIGN_NAME}_Click_Product`,
        merchantId,
        productId
    )
}

export const clickClose = () => {
    Event(`${CAMPAIGN_NAME}_Close`, 'CLICK', `${CAMPAIGN_NAME}_Close`)
}

export const clickExit = (isFirstPage) => {
    let campaignNameSuffix = '_last';
    if (isFirstPage) campaignNameSuffix = '_first'
    Event(`${CAMPAIGN_NAME}_Exit${campaignNameSuffix}`, 'CLICK', `${CAMPAIGN_NAME}_Exit${campaignNameSuffix}`)
}

export const pageViewEvent = (index) => {
    PageView(`${CAMPAIGN_NAME}_page${index}`)
}

export const capturePage = () => {
    Event(
        `${CAMPAIGN_NAME}_Capture`,
        EVENT_GA.CAPTURE.CATEGORY_NAME,
        `${CAMPAIGN_NAME}_Capture`
    )
}
