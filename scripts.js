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

    // sangerCampaign.officePhone = "502-338-1006";

// make it a function

// let addNewProperty = function (newProperty, value) {
//   sangerCampaign[newProperty] = value; 
  // note: must use bracket notation here
// }

// addNewProperty("officePhone", "502-338-1006");

// console.log(sangerCampaign.officePhone)




// ###########

// function to add a new object to the sangerCampaign object

  // new object to add
      let contactInfoObject = {
        phone: "502-338-1006",
        email: "elizabeth.sanger@gmail.com",
        address: "222 1st St. Nashville, TN"
      }

  // the function
      let addNewObject = function (newObjectName, newObject){
        sangerCampaign[newObjectName] = newObject;
      }

  // call the function
      addNewObject("contactInfo", contactInfoObject)


// ##########

// add another volunteer object to the volunteer array


// make it a function
let newVolunteer;
let addVolunteerInfo = function (volName, volAddress, volEmail, volPhoneNumber, volAvailability, volWillCanvas, volWillPhoneBank, volWillPole) {
    newVolunteer = {
      name: volName,
      address: volAddress,
      email: volEmail,
      phoneNumber: volPhoneNumber,
      availability: volAvailability,
      volActivities: {
        willCanvas: volWillCanvas,
        willPhoneBank: volWillPhoneBank,
        willPoll: volWillPole
      }
  }
}

addVolunteerInfo("Stephanie Yates", "333 S 2nd St", "stephanie@gmail.com", "502-338-1126", "weekdays", true, true, true);



let addVolunteer = function (volunteer) {
  sangerCampaign.volunteers.push(volunteer);
}

addVolunteer(newVolunteer)

console.log(sangerCampaign.volunteers)


// ######


// add a new image to the image gallery object

    // sangerCampaign.imageGallery.campaignTrail = "campaign.jpg";

// // make it a function
