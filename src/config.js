export const getAddressUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return "https://api-uat.vinid.dev/vincart-vinmart-mobile/v1/me/delivery-addresses"
    }
    return "https://api.vinid.net/vincart-mobile/v1/me/delivery-addresses"
}
