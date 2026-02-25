/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Divider
} from '@mui/material';
import getStyles from './styles';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { motion } from 'framer-motion';
import {
  babyCareImg,
  beautyHygieneImg,
  bedBathImg,
  cleaningHouseholdImg,
  coldBeveragesImg,
  dailyEssentialsImg,
  dairyImg,
  fancyJewelleryImg,
  freshFoodImg,
  frozenImg,
  hotBeveragesImg,
  kitchenHouseholdImg,
  packagedFoodImg,
  petCareImg,
  snacksSweetsImg,
  stationeryImg
} from '../../assets';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetailSection = () => {
  const { categoryId } = useParams();
  const styles = getStyles();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Hot Beverages',
      nameTA: 'கடுகிழிந்த பானங்கள்',
      image: hotBeveragesImg,
      description: 'Warm beverages to start your day or relax in the evening',
      descriptionTA:
        'உங்கள் நாளைத் தொடங்க அல்லது மாலையில் ஓய்வெடுக்க சூடான பானங்கள்',
      subcategories: [
        {
          name: 'Coffee',
          nameTA: 'காபி',
          products: [
            'Instant Coffee',
            'Filter Coffee',
            'Coffee Beans',
            'Coffee Powder'
          ]
        },
        {
          name: 'Tea',
          nameTA: 'தேநீர்',
          products: [
            'Black Tea',
            'Green Tea',
            'Herbal Tea',
            'Masala Tea',
            'Lemon Tea'
          ]
        },
        {
          name: 'Health Drinks',
          nameTA: 'ஆரோக்கிய பானங்கள்',
          products: ['Malt-based drinks', 'Herbal drinks', 'Protein drinks']
        }
      ]
    },
    {
      id: 2,
      name: 'Cold Beverages',
      nameTA: 'குளிர்ந்த பானங்கள்',
      image: coldBeveragesImg,
      description: 'Refreshing drinks to cool you down',
      descriptionTA: 'உங்களை குளிர்ச்சியாக வைக்க புத்துணர்ச்சி தரும் பானங்கள்',
      subcategories: [
        {
          name: 'Soft drinks',
          nameTA: 'குளிர்பானங்கள்',
          products: ['Cola', 'Orange', 'Lemon', 'Ginger Beer']
        },
        {
          name: 'Juices',
          nameTA: 'சாறுகள்',
          products: [
            'Orange Juice',
            'Apple Juice',
            'Grape Juice',
            'Mixed Fruit'
          ]
        },
        {
          name: 'Instant drink mixes',
          nameTA: 'உடனடி பானக் கலவைகள்',
          products: ['Tang', 'Rasna', 'Boost', 'Horlicks']
        },
        {
          name: 'Water',
          nameTA: 'தண்ணீர்',
          products: ['Mineral Water', 'Flavored Water', 'Sparkling Water']
        }
      ]
    },
    {
      id: 3,
      name: 'Packaged Food',
      nameTA: 'அறைக்கப்பட்ட உணவுகள்',
      image: packagedFoodImg,
      description: 'Convenient ready-to-eat and easy-to-prepare food items',
      descriptionTA:
        'உடனடியாக சாப்பிட அல்லது எளிதாக தயாரிக்க வசதியான உணவு பொருட்கள்',
      subcategories: [
        {
          name: 'Baby food',
          nameTA: 'குழந்தை உணவு',
          products: ['Cerelac', 'Farex', 'Lactogen', 'Baby Cereal']
        },
        {
          name: 'Baking needs',
          nameTA: 'பேக்கிங் தேவைகள்',
          products: ['Baking Powder', 'Yeast', 'Cake Mix', 'Icing Sugar']
        },
        {
          name: 'Breakfast foods',
          nameTA: 'காலை உணவுகள்',
          products: ['Corn Flakes', 'Oats', 'Muesli', 'Wheat Flakes']
        },
        {
          name: 'Jams & Honey',
          nameTA: 'ஜாம் & தேன்',
          products: [
            'Mixed Fruit Jam',
            'Mango Jam',
            'Pure Honey',
            'Flavored Honey'
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Snacking & Sweets',
      nameTA: 'இடைக்கால உணவுகள் மற்றும் இனிப்புகள்',
      image: snacksSweetsImg,
      description: 'Delicious snacks and sweets for your cravings',
      descriptionTA:
        'உங்கள் விருப்பத்திற்கேற்ப சுவையான இடைக்கால உணவுகள் மற்றும் இனிப்புகள்',
      subcategories: [
        {
          name: 'Biscuits',
          nameTA: 'பிஸ்கட்கள்',
          products: ['Glucose', 'Marie', 'Cream Biscuits', 'Cookies']
        },
        {
          name: 'Chips & Nachos',
          nameTA: 'சிப்ஸ் & நாச்சோஸ்',
          products: [
            'Potato Chips',
            'Banana Chips',
            'Tortilla Chips',
            'Cheese Balls'
          ]
        },
        {
          name: 'Chocolates',
          nameTA: 'சாக்லேட்கள்',
          products: [
            'Milk Chocolate',
            'Dark Chocolate',
            'White Chocolate',
            'Chocolate Bars'
          ]
        },
        {
          name: 'Confectionery',
          nameTA: 'மிட்டாய்கள்',
          products: ['Toffees', 'Gums', 'Lollipops', 'Jellies']
        }
      ]
    },
    {
      id: 5,
      name: 'Daily Essentials',
      nameTA: 'அன்றாட தேவைகள்',
      image: dailyEssentialsImg,
      description: 'Essential grocery items for everyday cooking',
      descriptionTA: 'அன்றாட சமையலுக்கான அத்தியாவசிய மளிகை பொருட்கள்',
      subcategories: [
        {
          name: 'Dry fruits',
          nameTA: 'உலர் பழங்கள்',
          products: ['Almonds', 'Cashews', 'Raisins', 'Walnuts']
        },
        {
          name: 'Flours',
          nameTA: 'மாவுகள்',
          products: ['Wheat Flour', 'Rice Flour', 'Gram Flour', 'Ragi Flour']
        },
        {
          name: 'Grains',
          nameTA: 'தானியங்கள்',
          products: ['Rice', 'Wheat', 'Millets', 'Quinoa']
        },
        {
          name: 'Oil',
          nameTA: 'எண்ணெய்',
          products: [
            'Sunflower Oil',
            'Groundnut Oil',
            'Coconut Oil',
            'Sesame Oil'
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Dairy',
      nameTA: 'பால் மற்றும் பால் பொருட்கள்',
      image: dairyImg,
      description: 'Fresh dairy products for your daily nutrition',
      descriptionTA:
        'உங்கள் அன்றாட ஊட்டச்சத்துக்கு புதிய பால் மற்றும் பால் பொருட்கள்',
      subcategories: [
        {
          name: 'Milk',
          nameTA: 'பால்',
          products: ['Cow Milk', 'Buffalo Milk', 'Soy Milk', 'Almond Milk']
        },
        {
          name: 'Curd',
          nameTA: 'தயிர்',
          products: [
            'Plain Curd',
            'Flavored Curd',
            'Greek Yogurt',
            'Low-fat Curd'
          ]
        },
        {
          name: 'Paneer',
          nameTA: 'பன்னீர்',
          products: ['Fresh Paneer', 'Low-fat Paneer', 'Tofu', 'Cottage Cheese']
        },
        {
          name: 'Eggs',
          nameTA: 'முட்டை',
          products: ['Farm Eggs', 'Country Eggs', 'Omega Eggs', 'Quail Eggs']
        }
      ]
    },
    {
      id: 7,
      name: 'Frozen',
      nameTA: 'மூடிய உணவுகள்',
      image: frozenImg,
      description: 'Frozen foods for quick and easy meals',
      descriptionTA: 'விரைவான மற்றும் எளிதான உணவுக்கு உறைந்த உணவுகள்',
      subcategories: [
        {
          name: 'Ice creams',
          nameTA: 'ஐஸ் கிரீம்கள்',
          products: ['Vanilla', 'Chocolate', 'Strawberry', 'Butterscotch']
        },
        {
          name: 'Frozen fresh',
          nameTA: 'உறைந்த புதிய உணவுகள்',
          products: [
            'Frozen Vegetables',
            'Frozen Fruits',
            'Frozen Ready Meals',
            'Frozen Parathas'
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'Fresh Food',
      nameTA: 'புதிய உணவுகள்',
      image: freshFoodImg,
      description: 'Freshly prepared foods for immediate consumption',
      descriptionTA: 'உடனடியாக உண்ண புதிதாக தயாரிக்கப்பட்ட உணவுகள்',
      subcategories: [
        {
          name: 'Batter',
          nameTA: 'மாவு',
          products: ['Dosa Batter', 'Idli Batter', 'Vada Batter', 'Pancake Mix']
        },
        {
          name: 'Heat & Eat',
          nameTA: 'சூடாக்கி சாப்பிடும் உணவுகள்',
          products: ['Ready Meals', 'Curries', 'Sweets', 'Snacks']
        }
      ]
    },
    {
      id: 9,
      name: 'Stationery',
      nameTA: 'எழுத்துப் பொருட்கள்',
      image: stationeryImg,
      description: 'School and office stationery supplies',
      descriptionTA: 'பள்ளி மற்றும் அலுவலக எழுத்துப் பொருட்கள்',
      subcategories: [
        {
          name: 'School supplies',
          nameTA: 'பள்ளி பொருட்கள்',
          products: ['Notebooks', 'Pens', 'Pencils', 'Erasers']
        },
        {
          name: 'General stationery',
          nameTA: 'பொது எழுத்துப் பொருட்கள்',
          products: ['Files', 'Staplers', 'Sticky Notes', 'Highlighters']
        }
      ]
    },
    {
      id: 10,
      name: 'Bed & Bath',
      nameTA: 'படுக்கை மற்றும் குளியலறை பொருட்கள்',
      image: bedBathImg,
      description: 'Comfortable linens for your home',
      descriptionTA: 'உங்கள் வீட்டிற்கான வசதியான துணிகள்',
      subcategories: [
        {
          name: 'Bathroom linen',
          nameTA: 'குளியலறை துணிகள்',
          products: ['Towels', 'Bath Mats', 'Shower Curtains', 'Bathrobes']
        },
        {
          name: 'Living room linen',
          nameTA: 'அறை துணிகள்',
          products: [
            'Curtains',
            'Cushion Covers',
            'Table Cloths',
            'Sofa Covers'
          ]
        },
        {
          name: 'Kitchen linen',
          nameTA: 'சமையலறை துணிகள்',
          products: ['Aprons', 'Kitchen Towels', 'Oven Mitts', 'Napkins']
        }
      ]
    },
    {
      id: 11,
      name: 'Fancy Jewellery',
      nameTA: 'அழகழிந்த நகைகள்',
      image: fancyJewelleryImg,
      description: 'Fashionable jewellery for all occasions',
      descriptionTA: 'அனைத்து சந்தர்ப்பங்களுக்கும் நவீன நகைகள்',
      subcategories: [
        {
          name: 'Hair range',
          nameTA: 'கூந்தல் அணிகலன்கள்',
          products: ['Hair Clips', 'Headbands', 'Hair Pins', 'Hair Chains']
        },
        {
          name: 'Hand accessory',
          nameTA: 'கை அணிகலன்கள்',
          products: ['Bangles', 'Bracelets', 'Rings', 'Hand Chains']
        },
        {
          name: 'Fancy range',
          nameTA: 'அழகழிந்த வகைகள்',
          products: ['Necklaces', 'Earrings', 'Anklets', 'Toe Rings']
        }
      ]
    },
    {
      id: 12,
      name: 'Kitchen & Household',
      nameTA: 'சமையலறை மற்றும் வீட்டு பொருட்கள்',
      image: kitchenHouseholdImg,
      description: 'Essential items for your kitchen and home',
      descriptionTA: 'உங்கள் சமையலறை மற்றும் வீட்டிற்கான அத்தியாவசிய பொருட்கள்',
      subcategories: [
        {
          name: 'Cutlery',
          nameTA: 'கத்தி முட்கரண்டி',
          products: ['Spoons', 'Forks', 'Knives', 'Chopsticks']
        },
        {
          name: 'Tumbler',
          nameTA: 'டம்ளர்',
          products: [
            'Steel Tumblers',
            'Glass Tumblers',
            'Plastic Tumblers',
            'Thermos'
          ]
        },
        {
          name: 'Plates',
          nameTA: 'தட்டுகள்',
          products: [
            'Steel Plates',
            'Ceramic Plates',
            'Melamine Plates',
            'Paper Plates'
          ]
        },
        {
          name: 'Mugs & Cups',
          nameTA: 'கப்கள்',
          products: ['Coffee Mugs', 'Tea Cups', 'Travel Mugs', 'Glass Cups']
        }
      ]
    },
    {
      id: 13,
      name: 'Baby Care',
      nameTA: 'குழந்தை பராமரிப்பு',
      image: babyCareImg,
      description: 'Essential products for your baby care',
      descriptionTA: 'உங்கள் குழந்தை பராமரிப்புக்கான அத்தியாவசிய பொருட்கள்',
      subcategories: [
        {
          name: 'Baby accessories',
          nameTA: 'குழந்தை பொருட்கள்',
          products: ['Feeding Bottles', 'Pacifiers', 'Baby Spoons', 'Bibs']
        },
        {
          name: 'Bath & hygiene',
          nameTA: 'குளியல் & சுகாதாரம்',
          products: ['Baby Soap', 'Shampoo', 'Oil', 'Powder']
        },
        {
          name: 'Diapers & wipes',
          nameTA: 'டயப்பர்கள்',
          products: [
            'Disposable Diapers',
            'Cloth Diapers',
            'Baby Wipes',
            'Diaper Rash Cream'
          ]
        }
      ]
    },
    {
      id: 14,
      name: 'Beauty & Hygiene',
      nameTA: 'அழகு மற்றும் சுகாதாரம்',
      image: beautyHygieneImg,
      description: 'Products for personal care and beauty',
      descriptionTA: 'தனிப்பட்ட பராமரிப்பு மற்றும் அழகுக்கான பொருட்கள்',
      subcategories: [
        {
          name: 'Bath & handwash',
          nameTA: 'குளியல் & கை சோப்பு',
          products: ['Body Wash', 'Hand Wash', 'Bath Soap', 'Hand Sanitizer']
        },
        {
          name: 'Hair care',
          nameTA: 'முடி பராமரிப்பு',
          products: ['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Serum']
        },
        {
          name: 'Skin care',
          nameTA: 'தோல் பராமரிப்பு',
          products: ['Face Wash', 'Moisturizer', 'Sunscreen', 'Face Cream']
        },
        {
          name: 'Oral care',
          nameTA: 'வாய் பராமரிப்பு',
          products: ['Toothpaste', 'Toothbrush', 'Mouthwash', 'Dental Floss']
        }
      ]
    },
    {
      id: 15,
      name: 'Cleaning & Household',
      nameTA: 'வீட்டு சுத்தம் மற்றும் பராமரிப்பு',
      image: cleaningHouseholdImg,
      description: 'Products to keep your home clean and fresh',
      descriptionTA:
        'உங்கள் வீட்டை சுத்தமாகவும் புதியதாகவும் வைத்திருக்க பொருட்கள்',
      subcategories: [
        {
          name: 'Disposables',
          nameTA: 'செலவழிப்பு பொருட்கள்',
          products: [
            'Tissue Paper',
            'Paper Towels',
            'Garbage Bags',
            'Disposable Cups'
          ]
        },
        {
          name: 'All purpose cleaners',
          nameTA: 'சுத்தம் செய்யும் பொருட்கள்',
          products: [
            'Floor Cleaner',
            'Bathroom Cleaner',
            'Glass Cleaner',
            'Multipurpose Cleaner'
          ]
        },
        {
          name: 'Detergents',
          nameTA: 'சோப்புகள்',
          products: [
            'Laundry Detergent',
            'Dish Wash',
            'Utensil Cleaner',
            'Fabric Softener'
          ]
        }
      ]
    },
    {
      id: 16,
      name: 'Pet Care',
      nameTA: 'விலங்கு பராமரிப்பு',
      image: petCareImg,
      description: 'Products for your beloved pets',
      descriptionTA: 'உங்கள் அன்பு விலங்குகளுக்கான பொருட்கள்',
      subcategories: [
        {
          name: 'Pet food',
          nameTA: 'விலங்கு உணவு',
          products: ['Dog Food', 'Cat Food', 'Bird Food', 'Fish Food']
        },
        {
          name: 'Pet accessories',
          nameTA: 'விலங்கு பொருட்கள்',
          products: ['Leashes', 'Collars', 'Toys', 'Bowls']
        }
      ]
    }
  ];

  const category = categories.find((cat) => cat.id === parseInt(categoryId));

  const handleBackClick = () => {
    navigate('/categories');
  };

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={styles.heroSection}>
        <Container maxWidth="lg">
          <Box sx={styles.heroContent}>
            <Typography variant="h1" sx={styles.heroTitle}>
              {category.name}
            </Typography>
            <Typography sx={styles.heroSubtitle}>
              {category.description}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={styles.availableProducts}>
        <Container maxWidth="lg">
          <Box>
            <Button
              variant="contained"
              size="small"
              sx={styles.primaryButton}
              startIcon={<ArrowBackIcon />}
              onClick={() => handleBackClick()}
            >
              Back
            </Button>
          </Box>
          <Typography variant="h3" sx={styles.sectionTitle}>
            Popular Products in {category.name}
          </Typography>
          <Divider sx={styles.divider} />
          <Grid container spacing={4} sx={styles.productsGrid}>
            {category.subcategories.map((subcat, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={styles.productCard}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <CardMedia
                      component="img"
                      image={category.image}
                      alt={category.name}
                      sx={styles.productImage}
                    />
                    <CardContent sx={styles.productContent}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 2
                        }}
                      >
                        <Typography variant="h3" sx={styles.productTitle}>
                          {subcat.name}
                        </Typography>
                      </Box>
                      <Typography sx={styles.productDescription}>
                        {subcat.description}
                      </Typography>
                      <Box sx={styles.productFooter}>
                        {subcat.products && (
                          <Box sx={styles.productsList}>
                            {subcat.products.map((product, i) => (
                              <Chip
                                key={i}
                                label={product}
                                sx={styles.productChip}
                              />
                            ))}
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDetailSection;
