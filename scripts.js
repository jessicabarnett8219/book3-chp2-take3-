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



// // add another property to the sangerCampaign object

  // the function
    let addNewProperty = function (newProperty, value) {
    sangerCampaign[newProperty] = value; 
    }

  // calling it here
    // addNewProperty("emailSignUp", "elizabethsanger.com/signup");



// // ###########

// // add a new object as a property of the sangerCampaign object

//   // new object as a property to add
      let contactInfoObject = {
        phone: "502-338-1006",
        email: "elizabeth.sanger@gmail.com",
        address: "222 1st St. Nashville, TN"
      }

//   // the function
      let addNewObject = function (newObjectName, newObject){
        sangerCampaign[newObjectName] = newObject;
      }

//   // call the function
      // addNewObject("contactInfo", contactInfoObject)

      // console.log(sangerCampaign.contactInfo.email)

// // ##########

// // function to add another volunteer object to the volunteer array
//     //  first create a new volunteer with this function, passing in their info as arguments
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

//     // calling it here with the new volunteer's info
      // addVolunteerInfo("Stephanie Yates", "333 S 2nd St", "stephanie@gmail.com", "502-338-1126", "weekdays", true, true, true);

    

//     // here is the function to add the new volunteer to the volunteer object
      let addVolunteer = function (volunteer) {
        sangerCampaign.volunteers.push(volunteer);
      }

//     // calling it here
      // addVolunteer(newVolunteer)

// // ######


// // function to add a new image to the image gallery object

  let addImage = function (imageName, fileName) {
    sangerCampaign.imageGallery.imageName = fileName;
  }

// // // // call it

addImage("campaign", "campaign.jpg")

console.log(sangerCampaign.imageGallery)

