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
      Name: "Jonathan Beam",
      Address: "3510 Golf St. Nashville, TN 37216",
      Email: "jonthan.beam@gmail.com",
      phoneNumber: "859-825-8824",
      availability: "Days and Weekends",
      activities: {
        willCanvas: true,
        willPhoneBank: false,
        willPoll: false
        }
      },
      {
        Name: "Wally Barnett-Beam",
        Address: "3500 Golf St. Nashville, TN 37216",
        Email: "wally@gmail.com",
        phoneNumber: "859-800-8824",
        availability: "Evenings",
        activities: {
          willCanvas: false,
          willPhoneBank: false,
          willPoll: false
        }
      },
      {
        Name: "Jessica Barnett",
        Address: "3600 Golf St. Nashville, TN 37216",
        Email: "jessica.barnett@gmail.com",
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

console.log("high taxes? " + sangerCampaign.platforms.taxes)
console.log("Jonathan Beam?" + sangerCampaign["volunteers"][0]["Name"])
console.log("false?" + sangerCampaign["volunteers"][0].activities.willPoll)