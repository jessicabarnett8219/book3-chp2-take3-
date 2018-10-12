let sangerCampaign = {
  district: 5,
  platforms: {
    taxes: "high taxes",
    jobs: "more jobs",
    infrastructure: "build roads",
    healthCare: "single payer",
    crimeEnforcement: "tough on crime"
  },
  donationForm: "www.donatesanger.com",
  eventCalendar: "www.donatesanger.com/events",
  volunteers: [
    {
      name: "Jonathan Beam",
      address: "3510 Golf St. Nashville, TN 37216",
      email: "jonthan.beam@gmail.com",
      phoneNumber: "859-825-8824",
      availability: "Days and Weekends",
      activities: {
        willCanvas: true,
        willPhoneBank: false,
        willPoll: false
        }
      },
      {
        name: "Wally Barnett-Beam",
        address: "3500 Golf St. Nashville, TN 37216",
        email: "wally@gmail.com",
        phoneNumber: "859-800-8824",
        availability: "Evenings",
        activities: {
          willCanvas: false,
          willPhoneBank: false,
          willPoll: false
        }
      },
      {
        name: "Jessica Barnett",
        address: "3600 Golf St. Nashville, TN 37216",
        email: "jessica.barnett@gmail.com",
        phoneNumber: "502-338-0908",
        availability: "Weekends",
        activities: {
          willCanvas: false,
          willPhoneBank: false,
          willPoll: true
        }
      }
    ],
  biography: "fkjdghkdjfhgkjfdhg",
  imageGallery: {
    headShot: "elizabeth.jpg",
    familyPhoto: "family.jpg",
    constituentsPhoto: "people.jpg"
  },
  missionStatement: "elect me",
  registerToVote: "votetn.org"
}

;

// add 1 more key value to the main object

sangerCampaign.officePhone= "502-338-1006";

// console.log("502-338-1006?" + sangerCampaign.officePhone)

// add a new object to the main object

sangerCampaign.contactInfo = {
  phone: "502-338-1006",
  email: "elizabeth.sanger@gmail.com",
  address: "222 1st St. Nashville, TN"
}

// console.log(sangerCampaign.contactInfo.email)

// add another volunteer object to the volunteer array

sangerCampaign.volunteers.push({
  name: "Stephanie Yates",
  address: "333 S 2nd St. Nashville",
  email: "stephanie.yates@gmail.com",
  phoneNumber: "502-338-01126",
  availability: "Days",
  activities: {
    willCanvas: true,
    willPhoneBank: false,
    willPoll: true
        }
});

// console.log(sangerCampaign.volunteers[3].name)

// add a new image to the image gallery object

sangerCampaign.imageGallery.campaignTrail = "campaign.jpg";
// console.log(sangerCampaign.imageGallery.campaignTrail)