
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the contact form element
  const contactForm = document.getElementById('contactForm');
  
  // Form data object to store values
  let formData = {
    fullName: "",
    email: "",
    phone: "",
    services: {
      designBranding: false,
      videographyPhotography: false,
      webDesignDevelopment: false,
      appDevelopment: false,
      marketing: false,
      intellectualProperty: false,
      other: ""
    },
    message: ""
  };

  // Get all form input elements
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const otherInput = document.getElementById('other');
  
  // Get all checkbox elements
  const designBrandingCheckbox = document.getElementById('designBranding');
  const videographyPhotographyCheckbox = document.getElementById('videographyPhotography');
  const webDesignDevelopmentCheckbox = document.getElementById('webDesignDevelopment');
  const appDevelopmentCheckbox = document.getElementById('appDevelopment');
  const marketingCheckbox = document.getElementById('marketing');
  const intellectualPropertyCheckbox = document.getElementById('intellectualProperty');

  // Add event listeners for text inputs to update formData
  fullNameInput.addEventListener('input', function(e) {
    formData.fullName = e.target.value;
  });

  emailInput.addEventListener('input', function(e) {
    formData.email = e.target.value;
  });

  phoneInput.addEventListener('input', function(e) {
    formData.phone = e.target.value;
  });

  messageInput.addEventListener('input', function(e) {
    formData.message = e.target.value;
  });

  otherInput.addEventListener('input', function(e) {
    formData.services.other = e.target.value;
  });

  // Add event listeners for checkboxes to update formData
  designBrandingCheckbox.addEventListener('change', function(e) {
    formData.services.designBranding = e.target.checked;
  });

  videographyPhotographyCheckbox.addEventListener('change', function(e) {
    formData.services.videographyPhotography = e.target.checked;
  });

  webDesignDevelopmentCheckbox.addEventListener('change', function(e) {
    formData.services.webDesignDevelopment = e.target.checked;
  });

  appDevelopmentCheckbox.addEventListener('change', function(e) {
    formData.services.appDevelopment = e.target.checked;
  });

  marketingCheckbox.addEventListener('change', function(e) {
    formData.services.marketing = e.target.checked;
  });

  intellectualPropertyCheckbox.addEventListener('change', function(e) {
    formData.services.intellectualProperty = e.target.checked;
  });

  // Handle form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate email
    if (!emailInput.value.trim()) {
      alert('Please enter your email address');
      emailInput.focus();
      return;
    }
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear form (optional)
    contactForm.reset();
    
    // Reset formData object
    formData = {
      fullName: "",
      email: "",
      phone: "",
      services: {
        designBranding: false,
        videographyPhotography: false,
        webDesignDevelopment: false,
        appDevelopment: false,
        marketing: false,
        intellectualProperty: false,
        other: ""
      },
      message: ""
    };
  });
});
