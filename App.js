import React from "react";
import ReactDOM from "react-dom/client";

/* Documentation
  # Header
    #- Logo
    #- Nav Items
  # Body
    #- Search
    #- RestaurantContainer
      #- RestaurantCard
      #- Image
      #- Name
      #- Cusines
      #- Rating
  # Footer
    #- Copyright
    #- Social Links  
    #- Contact
    #- Address
# */

//# Header Component 
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <a href=""> 🍟🍕</a>
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};


//# Styling the card
const styleCard = {
  width: "300px",
  padding: "5px",
  backgroundColor: "#5C766D",
  display: "flex",
  flexDirection: "column",
  transition: "0.3s all ease-in-out",
  gap: "10px",
  color: "#E3D095",
}


const resList = {
  "cards": [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "736171",
            "name": "HRX by EatFit",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/4/8573929f-9ff1-41c5-b3a7-ba34adcac70d_736171.JPG",
            "locality": "SEC-63",
            "areaName": "A.S NAGAR MOHALI",
            "costForTwo": "₹270 for two",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Burgers"
            ],
            "avgRating": 4.6,
            "parentId": "624615",
            "avgRatingString": "4.6",
            "totalRatingsString": "781",
            "promoted": true,
            "adTrackingId": "cid=a2df4bfa-5732-4eb4-9992-e4d70ed6b420~p=0~adgrpid=a2df4bfa-5732-4eb4-9992-e4d70ed6b420#ag9~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=736171~plpr=COLLECTION~eid=65c1f909-c24d-431e-9319-4a5d9c9ee0b4~srvts=1778234073050~collid=83633",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-09 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "android/static-assets/icons/big_rx.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                  "description": "EatRight"
                },
                {
                  "imageId": "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                  "description": "Best in EatRight"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                      }
                    },
                    {
                      "attributes": {
                        "theme": "",
                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                        "description": "EatRight"
                      }
                    },
                    {
                      "attributes": {
                        "imageId": "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                        "description": "Best in EatRight",
                        "theme": ""
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "a2df4bfa-5732-4eb4-9992-e4d70ed6b420",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=736171&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "857545",
            "name": "3B-2 Dhaba",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/2/dbe96249-258a-458e-abe4-3d7dc168c08d_857545.jpg",
            "locality": "Phase 3",
            "areaName": "Phase 3B2 Mohali",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Thalis",
              "Biryani",
              "Punjabi",
              "Chinese",
              "Street Food",
              "Snacks",
              "Fast Food",
              "Combos",
              "Burgers"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "503986",
            "avgRatingString": "4.0",
            "totalRatingsString": "13K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-40 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-08 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "android/static-assets/icons/big_rx.png",
                  "description": "bolt!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {},
                "textBased": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹89"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "284"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=857545&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "615792",
            "name": "Ghar ka Khana by EatFit",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/13/f3651728-9fd1-46d5-9cd6-d2ad36ba7602_615792.JPG",
            "locality": "S.A.S NAGAR MOHALI",
            "areaName": "MOHALI",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Home Food",
              "North Indian",
              "Healthy Food",
              "Thalis",
              "Desserts",
              "Indian",
              "Punjabi"
            ],
            "avgRating": 4.4,
            "parentId": "422576",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.5K+",
            "promoted": true,
            "adTrackingId": "cid=21f85aed-4dc8-4536-852b-beeea7c78bfa~p=1~adgrpid=21f85aed-4dc8-4536-852b-beeea7c78bfa#ag2~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=615792~plpr=COLLECTION~eid=3d43dc24-04da-4083-89e9-d3ae27d58b1f~srvts=1778234073050~collid=83633",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-09 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                  "description": "EatRight"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                        "description": "EatRight",
                        "theme": ""
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "theme": "",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "21f85aed-4dc8-4536-852b-beeea7c78bfa",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=615792&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "125587",
            "name": "Raja Vaishno Dhaba",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/f16be4d2-3285-4cbe-9511-8b7444fc1a5f_125587.jpg",
            "locality": "Phase 11",
            "areaName": "Sector 65",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Hyderabadi",
              "Home Food",
              "Punjabi",
              "Thalis",
              "Fast Food",
              "Chinese",
              "Burgers"
            ],
            "avgRating": 4.3,
            "parentId": "559997",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.9K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-08 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "android/static-assets/icons/big_rx.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                      }
                    },
                    {
                      "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg",
                        "theme": ""
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.7",
                "ratingCount": "302"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=125587&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1002257",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/3/ea8ce88c-d532-4a07-974b-79dab50971b7_1002257.jpg",
            "locality": "SAS Nagar",
            "areaName": "Mohali Walk",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "434792",
            "avgRatingString": "4.2",
            "totalRatingsString": "514",
            "promoted": true,
            "adTrackingId": "cid=33941920-3d96-452d-aad6-5d9165d338f6~p=4~adgrpid=33941920-3d96-452d-aad6-5d9165d338f6#ag12~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1002257~plpr=COLLECTION~eid=c89aef6b-a0fd-4209-9c71-eea47a3e3f6a~srvts=1778234073050~collid=83633",
            "sla": {
              "deliveryTime": 21,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-08 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "android/static-assets/icons/big_rx.png",
                  "description": "bolt!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹139"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "33941920-3d96-452d-aad6-5d9165d338f6",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=1002257&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "54214",
            "name": "Hoshiarpuria 3b2",
            "cloudinaryImageId": "ujcki60xhet1ghlb4rga",
            "locality": "Phase 3",
            "areaName": "Phase 3 Mohali",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Sweets",
              "Snacks",
              "Chinese",
              "Fast Food",
              "Burgers",
              "indian snacks",
              "Indian",
              "North Indian"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "97041",
            "avgRatingString": "4.3",
            "totalRatingsString": "26K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-08 23:15:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "android/static-assets/icons/big_rx.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                      }
                    },
                    {
                      "attributes": {
                        "theme": "",
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.8",
                "ratingCount": "1.2K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=54214&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1011195",
            "name": "Call Chotu @ Elante Food Court",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/9980e39a-cc5a-4964-9a59-c23ca4830fc4_1011195 (1).jpg",
            "locality": "Elante Mall",
            "areaName": "South Chd",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "North Indian",
              "Street Food",
              "Momos"
            ],
            "avgRating": 4.3,
            "parentId": "618323",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.2K+",
            "promoted": true,
            "adTrackingId": "cid=558fb33d-c303-4917-b994-410cae20cb52~p=5~adgrpid=558fb33d-c303-4917-b994-410cae20cb52#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1011195~plpr=COLLECTION~eid=20d31e75-1cfb-4b83-bace-73e2002ea17a~srvts=1778234073050~collid=83633",
            "sla": {
              "deliveryTime": 51,
              "lastMileTravel": 9.7,
              "serviceability": "SERVICEABLE",
              "slaString": "50-60 mins",
              "lastMileTravelString": "9.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2026-05-08 22:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "558fb33d-c303-4917-b994-410cae20cb52",
            "priceComparisonComms": {}
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=1011195&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
  ],
}

//# Restaurant Cards 
// const RestaurantCard = ({resName, cuisine}) => {  (Destructuring)
const RestaurantCard = ({ resData }) => { //Direct via prop 
  // const restInfo = resData.card.card.info;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.card?.card?.info;
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (

    <div className="res-card" style={styleCard}>
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo} for two</h4>
    </div>
  )
}



//# Body Component 
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search.." />
      </div>
      <div className="res-container">

        {
          resList.cards.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  )
}


//# App Component 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
