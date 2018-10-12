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

    // here is the function to add the new volunteer to the volunteer object array
  

      let addVolunteer = function (
        volName, volAddress, volEmail, volPhoneNumber, volAvailability, volWillCanvas, volWillPhoneBank, volWillPole) { 
          sangerCampaign.volunteers.push({
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
          })
        }

        // calling it here
        addVolunteer("Stephanie Yates", "222 S St.", "502-123-3567", "weekdays", true, false, true)

        console.log(sangerCampaign.volunteers)
        console.log(sangerCampaign.volunteers[3].name)

// // ######


// // function to add a new image to the image gallery object

  // let addImage = function (imageName, fileName) {
  //   sangerCampaign.imageGallery.imageName = fileName;
  // }

  // let addImage = function (imageName) {
  //   sangerCampaign.imageGallery[imageName];
  // }

  // addImage(campaign)

// // // // call it

// addImage("campaign", "campaign.jpg")

// console.log(sangerCampaign.imageGallery)

