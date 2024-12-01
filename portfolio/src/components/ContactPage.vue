<template>
    <div id="contact" class="contact-section">
      <h1>Get In Touch</h1>
      <div class="contact-container">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              :class="{ 'portal-glow': focused === 'email' }"
              @focus="focused = 'email'"
              @blur="focused = null"
            >
          </div>
  
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="form.subject"
              required
              :class="{ 'portal-glow': focused === 'subject' }"
              @focus="focused = 'subject'"
              @blur="focused = null"
            >
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              :class="{ 'portal-glow': focused === 'message' }"
              @focus="focused = 'message'"
              @blur="focused = null"
            ></textarea>
          </div>

          <div v-if="success" class="success-message">
            Message sent successfully! I'll get back to you soon.
          </div>
          <p v-if="error" class="error-message">{{ error }}</p>
          <button
            type="submit"
            class="submit-btn"
            :disabled="loading"
          >
            <span v-if="loading" class="loader"></span>
            <span v-else>Send Message</span>
          </button>
        </form>
  
        <div class="contact-info">
          <h2>Other Ways to Connect</h2>
          <div class="social-links">
            <a href="https://github.com/JohnMedlock" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/jwmedlock" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import emailjs from '@emailjs/browser';
  
  export default {
    name: 'ContactPage',
    created() {
      // Check for required environment variables
      const requiredVars = [
        'VUE_APP_EMAILJS_PUBLIC_KEY',
        'VUE_APP_EMAILJS_SERVICE_ID',
        'VUE_APP_EMAILJS_TEMPLATE_ID',
        'VUE_APP_RECIPIENT_EMAIL'
      ];
  
      const missingVars = requiredVars.filter(varName => !process.env[varName]);
      if (missingVars.length > 0) {
        console.error('Missing required environment variables:', missingVars);
        this.error = 'Contact form configuration error. Please try again later.';
        return;
      }
  
      // Initialize EmailJS
      try {
        emailjs.init(process.env.VUE_APP_EMAILJS_PUBLIC_KEY);
      } catch (error) {
        console.error('EmailJS initialization error:', error);
        this.error = 'Failed to initialize contact form. Please try again later.';
      }
    },
    data() {
      return {
        focused: null,
        form: {
          email: '',
          subject: '',
          message: ''
        },
        loading: false,
        error: null,
        success: false
      }
    },
    methods: {
      async handleSubmit() {
        if (this.error) {
          return; // Don't proceed if there are configuration errors
        }
  
        this.loading = true;
        this.error = null;
        this.success = false;
        
        try {
          const response = await emailjs.send(
            process.env.VUE_APP_EMAILJS_SERVICE_ID,
            process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
            {
              from_email: this.form.email,
              to_email: process.env.VUE_APP_RECIPIENT_EMAIL,
              subject: this.form.subject,
              message: this.form.message,
            }
          );
  
          if (response.status === 200) {
            this.form.email = '';
            this.form.subject = '';
            this.form.message = '';
            this.success = true;
          } else {
            throw new Error('Failed to send email');
          }
        } catch (error) {
          console.error('Email error:', error);
          this.error = 'Failed to send message. Please try again.';
        } finally {
          this.loading = false;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
    padding: 4rem 2rem;
    min-height: 100vh;
    background: linear-gradient(45deg, rgba(255, 105, 52, 0.1), rgba(0, 163, 225, 0.1));
  }
  
  h1 {
    text-align: center;
    color: var(--portal-orange);
    margin-bottom: 3rem;
  }
  
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
  
  .contact-form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--portal-blue);
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .portal-glow {
    border-color: var(--portal-orange);
    box-shadow: 0 0 10px rgba(255, 105, 52, 0.2);
  }
  
  .submit-btn {
    background: linear-gradient(135deg, var(--portal-orange), var(--portal-blue));
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease;
    width: 100%;
    font-weight: bold;
  }
  
  .submit-btn:hover {
    transform: translateY(-2px);
  }
  
  .contact-info {
    padding: 2rem;
  }
  
  .contact-info h2 {
    color: var(--portal-blue);
    margin-bottom: 1.5rem;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-links a {
    color: var(--portal-orange);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: var(--portal-blue);
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
    
    .contact-section {
      padding: 2rem 1rem;
    }
  }

  .error-message {
    color: #dc3545;
    margin-bottom: 1rem;
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  </style>