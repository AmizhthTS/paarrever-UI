import { styled } from '@mui/material';

/* eslint-disable no-debugger */
const validatePincode = (value) => {
  if (/^(\d)\1{5}$/.test(value)) {
    return 'Pincode cannot be a sequence of six identical digits';
  }
  return true;
};

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const validatePassword = (value) => {
  const trimmedValue = value.trim();
  // Check if the trimmed value is empty
  if (trimmedValue.length === 0) {
    return 'Empty Space Not Allow';
  }
  if (trimmedValue.length > 15) {
    return 'Password cannot exceed 15 characters';
  }
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(value)) {
    return 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character,Empty Space Not Allow';
  }
};

const isWhitespace = (value) => {
  return /^\s*$/.test(value);
};

const validateEmail = (value) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const isValid = emailRegex.test(value);
  return isValid || 'Invalid email address';
};

const validatePhoneNumber = (value) => {
  // const isValid = value.length === 10;
  if (value.length !== 10) {
    return 'Phone number must be 10 digits';
  }
  const matches = value.match(
    /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
  );
  if (matches === null) {
    return 'Only numbers allowed';
  }
};

const validateNumberonly = (e) => {
  const validKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
  if (!/[0-9]/.test(e.key) && !validKeys.includes(e.key)) {
    e.preventDefault();
  }
};

const validateAadharNumber = (value) => {
  if (value.length) {
    if (value.length !== 12) {
      return 'Aadhar number must be 12 digits';
    }
  }
};

const validatePANNumber = (value) => {
  const panRegex = /^[A-Z,a-z]{5}[0-9]{4}[A-Z,a-z]$/;
  const isValid = panRegex.test(value);
  return isValid || 'Please enter a valid PAN number';
};

const checkAlphanumeric = (e) => {
  if (!/[0-9A-Za-z]/.test(e.key)) {
    e.preventDefault();
  }
};

const checkUppernumeric = (e) => {
  if (!/[0-9A-Za-z]/.test(e.key)) {
    e.preventDefault();
    return;
  }
};

const validateCinOrPanNo = (value) => {
  if (value.length !== 21) {
    return 'Input must be exactly 21 characters long.';
  }
  return true;
};

const youtubeLink = (value) => {
  const regex = /^https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
  const match = value.match(regex);
  if (!match) {
    return 'Invalid YouTube URL';
  }
};
const isEmptyObject = (obj) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};
const checkSize = () => {
  if (window.innerWidth > 1440) {
    return 4;
  } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
    return 4;
  } else if (window.innerWidth <= 1024 && window.innerWidth > 992) {
    return 4;
  } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
    return 4;
  } else if (window.innerWidth <= 768 && window.innerWidth > 575) {
    return 4;
  } else {
    return 1;
  }
};
const hasThemePrivilege = (requiredLevel) => {
  let Privileges = localStorage.getItem('themePrivileges');
  if (Privileges !== 'undefined' && Privileges !== null) {
    const privilegeLevels = JSON.parse(Privileges);
    let value =
      privilegeLevels.indexOf('0') < privilegeLevels.indexOf(requiredLevel);
    return value;
  }
};
function getValueFromPath(object, path) {
  const keys = path.split('.'); // Split the string into keys
  return keys.reduce((acc, key) => (acc ? acc[key] : undefined), object);
}
function handleError(error) {
  console.log(error);
  if (error.response) {
    if (error.response.status === 403) {
      // window.location.assign('/sesstion-timeout');
    }
  } else if (error.message === 'Network Error') {
    // window.location.assign('/under-maintenance');
  }
}
const getApiResponse = (value) => {
  let data = [];
  let bannerData = {};
  let overAllData = {};
  let aboutData = {};
  let serviceData = {};
  let galleryData = {};
  let testimonialData = {};
  let matrixData = {};
  let videoData = {};
  let experiencesData = {};
  let footerData = {};
  let blogData = {};
  let credentialsAffiliationsData = {};
  let educationData = {};
  // let resumeData = {};
  // let skillsData = {};
  let initiativesData = {};
  let discoverData = {};
  let customBannerData = {};
  let missionVisionData = {};
  let coreValuesData = {};
  overAllData = value;
  if (value?.json?.sections) {
    data = value.json.sections;
    if (data.length > 0) {
      data.forEach((element) => {
        if (element.id === 1) {
          if (element.images) {
            element.images.forEach((value) => {
              if (value.imageType === 'Banner' && value.imageUrl) {
                element = {
                  ...element,
                  bannerImageURL: value.imageUrl,
                  bannerImageName: value.imageName,
                  bannerImage: value.image
                };
              }
              if (value.imageType === 'resume' && value.imageUrl) {
                element = {
                  ...element,
                  resumeURL: value.imageUrl,
                  resumeName: value.imageName,
                  resume: value.image
                };
              }
              if (value.imageType === 'Logo' && value.imageUrl) {
                element = {
                  ...element,
                  logoURL: value.imageUrl,
                  logoName: value.imageName,
                  logo: value.image
                };
              }
            });
          }
          const logoData = { ...element };
          logoData.logoURL = localStorage.getItem('logoURL');
          console.log(element.logoURL, 'logo');
          bannerData = element;
        }
        if (element.id === 2) {
          if (element.images) {
            element.images.forEach((value) => {
              if (value.imageType === 'AboutBanner' && value.imageUrl) {
                element = {
                  ...element,
                  aboutImageURL: value.imageUrl,
                  aboutImageName: value.imageName,
                  aboutImage: value.image
                };
              }
              if (value.imageType === 'resume' && value.imageUrl) {
                element = {
                  ...element,
                  resumeURL: value.imageUrl,
                  resumeName: value.imageName,
                  resume: value.image
                };
              }
              if (
                value.imageType === 'firstParagraphImageName' &&
                value.imageUrl
              ) {
                element = {
                  ...element,
                  firstParagraphImageURL: value.imageUrl,
                  firstParagraphImageName: value.imageName,
                  firstParagraphImage: value.image
                };
              }
              if (
                value.imageType === 'secondParagraphImageName' &&
                value.imageUrl
              ) {
                element = {
                  ...element,
                  secondParagraphImageURL: value.imageUrl,
                  secondParagraphImageName: value.imageName,
                  secondParagraphImage: value.image
                };
              }
              if (
                value.imageType === 'thirdParagraphImageName' &&
                value.imageUrl
              ) {
                element = {
                  ...element,
                  thirdParagraphImageURL: value.imageUrl,
                  thirdParagraphImageName: value.imageName,
                  thirdParagraphImage: value.image
                };
              }
            });
          }
          aboutData = element;
        }
        if (element.id === 3) {
          if (element.images) {
            const mutableTestimonials = element.testimonials.map((service) => ({
              ...service
            }));

            element.images.forEach((value, index) => {
              if (value.imageType === 'testimoialImage' && value.imageUrl) {
                // mutableTestimonials[value.id - 2].imageUrl = value.imageUrl;
                // mutableTestimonials[value.id - 2].imageName = value.imageName;
                // mutableTestimonials[value.id - 2].image = value.image;
                mutableTestimonials[index].imageUrl = value.imageUrl;
                mutableTestimonials[index].imageName = value.imageName;
                mutableTestimonials[index].image = value.image;
              } else if (
                value.imageType === 'testimonialImageOne' &&
                value.imageUrl
              ) {
                element = {
                  ...element,
                  testimonialImageURL: value.imageUrl,
                  testimonialImageName: value.imageName,
                  testimonialImage: value.image
                };
              }
            });
            element = {
              ...element,
              testimonials: mutableTestimonials
            };
          }

          testimonialData = element;
        }
        if (element.id === 4) {
          videoData = element;
        }
        if (element.id === 5) {
          footerData = element;
        }
        if (element.id === 6) {
          if (element.images) {
            const mutableServices = element.services.map((service) => ({
              ...service
            }));

            element.images.forEach((value, index) => {
              if (value.imageType === 'serviceImage' && value.imageUrl) {
                // mutableServices[value.id - 2].imageUrl = value.imageUrl;
                // mutableServices[value.id - 2].imageName = value.imageName;
                // mutableServices[value.id - 2].image = value.image;
                mutableServices[index].imageUrl = value.imageUrl;
                mutableServices[index].imageName = value.imageName;
                mutableServices[index].image = value.image;
              } else if (
                value.imageType === 'serviceImageOne' &&
                value.imageUrl
              ) {
                element = {
                  ...element,
                  serviceImageURL: value.imageUrl,
                  serviceImageName: value.imageName,
                  serviceImage: value.image
                };
              }
            });
            element = {
              ...element,
              services: mutableServices
            };
          }

          serviceData = element;
        }
        if (element.id === 7) {
          if (element.images) {
            const mutableGallery = element.gallerys.map((service) => ({
              ...service
            })); // Clone services array

            element.images.forEach((value, index) => {
              if (
                value.imageType === 'galleryImage' &&
                value.imageUrl &&
                mutableGallery[index]
              ) {
                mutableGallery[index].imageUrl = value.imageUrl;
                mutableGallery[index].imageName = value.imageName;
                mutableGallery[index].image = value.image;
              }
            });
            element = {
              ...element,
              gallerys: mutableGallery
            };
          }

          galleryData = element;
        }
        if (element.id === 8) {
          if (element.images) {
            element.images.forEach((value) => {
              if (value.imageType === 'Professional1' && value.imageUrl) {
                element = {
                  ...element,
                  professional1ImageUrl: value.imageUrl,
                  professional1ImageName: value.imageName,
                  professional1Image: value.image
                };
              }
              if (value.imageType === 'Professional2' && value.imageUrl) {
                element = {
                  ...element,
                  professional2ImageUrl: value.imageUrl,
                  professional2ImageName: value.imageName,
                  professional2Image: value.image
                };
              }
              if (value.imageType === 'Professional3' && value.imageUrl) {
                element = {
                  ...element,
                  professional3ImageUrl: value.imageUrl,
                  professional3ImageName: value.imageName,
                  professional3Image: value.image
                };
              }
            });
          }
          experiencesData = element;
        }
        if (element.id === 9) {
          if (element.images) {
            const mutableMatrix = element.matrix.map((service) => ({
              ...service
            })); // Clone services array

            element.images.forEach((value, index) => {
              if (
                value.imageType === 'matrixImage' &&
                value.imageUrl &&
                mutableMatrix[index]
              ) {
                mutableMatrix[index].imageUrl = value.imageUrl;
                mutableMatrix[index].imageName = value.imageName;
                mutableMatrix[index].image = value.image;
              }
            });
            element = {
              ...element,
              matrix: mutableMatrix
            };
          }
          matrixData = element;
        }
        if (element.id === 10) {
          if (element.images) {
            const mutableBlog = element.blog.map((service) => ({
              ...service
            }));

            element.images.forEach((value, index) => {
              if (
                value.imageType === 'blogImage' &&
                value.imageUrl &&
                mutableBlog[index]
              ) {
                mutableBlog[index].imageUrl = value.imageUrl;
                mutableBlog[index].imageName = value.imageName;
                mutableBlog[index].image = value.image;
              }
            });
            element = {
              ...element,
              blog: mutableBlog
            };
          }

          blogData = element;
        }
        if (element.id === 11) {
          if (element.images) {
            const mutableCredentialsAffiliations =
              element.credentialsAffiliations.map((service) => ({
                ...service
              }));

            element.images.forEach((value, index) => {
              if (
                value.imageType === 'credentialsAffiliationsImage' &&
                value.imageUrl &&
                mutableCredentialsAffiliations[index]
              ) {
                mutableCredentialsAffiliations[index].imageUrl = value.imageUrl;
                mutableCredentialsAffiliations[index].imageName =
                  value.imageName;
                mutableCredentialsAffiliations[index].image = value.image;
              }
            });
            element = {
              ...element,
              credentialsAffiliations: mutableCredentialsAffiliations
            };
          }

          credentialsAffiliationsData = element;
        }
        if (element.id === 12) {
          if (element.images) {
            const mutableInitiatives = element.initiatives.map((service) => ({
              ...service
            }));

            element.images.forEach((value, index) => {
              if (
                value.imageType === 'initiativesImage' &&
                value.imageUrl &&
                mutableInitiatives[index]
              ) {
                mutableInitiatives[index].imageUrl = value.imageUrl;
                mutableInitiatives[index].imageName = value.imageName;
                mutableInitiatives[index].image = value.image;
              }
            });
            element = {
              ...element,
              initiatives: mutableInitiatives
            };
          }

          initiativesData = element;
        }
        if (element.id === 13) {
          if (element.images) {
            element.images.forEach((value) => {
              if (value.imageType === 'CustomBanner' && value.imageUrl) {
                element = {
                  ...element,
                  bannerImageURL: value.imageUrl,
                  bannerImageName: value.imageName,
                  bannerImage: value.image
                };
              }
            });
          }
          customBannerData = element;
        }
        if (element.id === 14) {
          if (element.images) {
            const mutableDiscover = element.discover.map((discover) => ({
              ...discover
            }));

            element.images.forEach((value, index) => {
              if (value.imageType === 'discoverImage' && value.imageUrl) {
                mutableDiscover[index].imageUrl = value.imageUrl;
                mutableDiscover[index].imageName = value.imageName;
                mutableDiscover[index].image = value.image;
              }
            });
            element = {
              ...element,
              discover: mutableDiscover
            };
          }

          discoverData = element;
        }
        if (element.id === 15) {
          educationData = element;
        }
        // if (element.id === 12) {
        //   if (element.images) {
        //     element.images.forEach((value) => {
        //       if (value.imageType === 'Resume' && value.imageUrl) {
        //         element = {
        //           ...element,
        //           resumeImageURL: value.imageUrl,
        //           resumeImageName: value.imageName,
        //           resumeImage: value.image
        //         };
        //       }
        //     });
        //   }
        //   resumeData = element;
        // }
        // if (element.id === 13) {
        //   if (element.images) {
        //     element.images.forEach((value) => {
        //       if (value.imageType === 'Skills' && value.imageUrl) {
        //         element = {
        //           ...element,
        //           skillsImageURL: value.imageUrl,
        //           skillsImageName: value.imageName,
        //           skillsImage: value.image
        //         };
        //       }
        //     });
        //   }
        //   skillsData = element;
        // }
        if (element.id === 16) {
          missionVisionData = element;
        }
        if (element.id === 17) {
          if (element.images) {
            const mutableCorevalue = element.coreValues.map((service) => ({
              ...service
            }));

            element.images.forEach((value, index) => {
              if (value.imageType === 'coreValuesImage' && value.imageUrl) {
                mutableCorevalue[index].imageUrl = value.imageUrl;
                mutableCorevalue[index].imageName = value.imageName;
                mutableCorevalue[index].image = value.image;
              }
            });
            element = {
              ...element,
              coreValues: mutableCorevalue
            };
          }
          coreValuesData = element;
        }
      });
    }
  }
  return {
    overAllData: overAllData,
    sectionData: data,
    bannerData: bannerData,
    aboutData: aboutData,
    testimonialData: testimonialData,
    videoData: videoData,
    serviceData: serviceData,
    galleryData: galleryData,
    matrixData: matrixData,
    experiencesData: experiencesData,
    footerData: footerData,
    blogData: blogData,
    credentialsAffiliationsData: credentialsAffiliationsData,
    // resumeData: resumeData,
    // skillsData: skillsData
    initiativesData: initiativesData,
    customBannerData: customBannerData,
    discoverData: discoverData,
    educationData: educationData,
    missionVisionData: missionVisionData,
    coreValuesData: coreValuesData
  };
};
const handleDataVersion = (sectionData, data) => {
  let value = sectionData.filter((item) => item.id === data.id);
  if (value.length === 0) {
    let dat = [...sectionData, data];
    return dat;
  } else if (value.length === 1) {
    let val = sectionData.map((item) => (item.id === data.id ? data : item));
    return val;
  }
};
export {
  validatePincode,
  validatePassword,
  isWhitespace,
  validateEmail,
  validatePhoneNumber,
  VisuallyHiddenInput,
  validateNumberonly,
  validateAadharNumber,
  validatePANNumber,
  checkAlphanumeric,
  checkUppernumeric,
  validateCinOrPanNo,
  youtubeLink,
  isEmptyObject,
  checkSize,
  hasThemePrivilege,
  getValueFromPath,
  getApiResponse,
  handleDataVersion,
  handleError
};
