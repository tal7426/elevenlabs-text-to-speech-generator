// Main JavaScript for ElevenLabs Clone
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initializeNavigation();
    initializeDemoTabs();
    initializePlayButtons();
    initializeFeatureTabs();
    initializeUseCaseTabs();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializeVoiceChat();
});

// Navigation functionality
function initializeNavigation() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Demo tabs functionality
function initializeDemoTabs() {
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanels = document.querySelectorAll('.demo-panel');

    demoTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and panels
            demoTabs.forEach(t => t.classList.remove('active'));
            demoPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding panel
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Play button functionality
function initializePlayButtons() {
    const playButtons = document.querySelectorAll('.play-btn, .demo-play-btn');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            try {
                // Simulate audio playback
                simulateAudioPlayback(this);
            } catch (error) {
                console.error('Error playing audio:', error);
                showErrorMessage('Unable to play audio at this time.');
            }
        });
    });
}

// Simulate audio playback
function simulateAudioPlayback(button) {
    const originalText = button.textContent;
    const voiceName = button.getAttribute('data-voice') || 'sample';
    
    // Change button state to playing
    button.textContent = 'Playing...';
    button.classList.add('playing');
    button.disabled = true;
    
    // Add pulse animation to button
    button.classList.add('pulse');
    
    // Log the interaction for debugging
    console.log(`Playing ${voiceName} voice sample`);
    
    // Simulate playback duration (3-5 seconds)
    const duration = Math.random() * 2000 + 3000;
    
    setTimeout(() => {
        // Reset button state
        button.textContent = originalText;
        button.classList.remove('playing', 'pulse');
        button.disabled = false;
        
        console.log(`Finished playing ${voiceName} voice sample`);
    }, duration);
}

// Feature tabs functionality
function initializeFeatureTabs() {
    const featureTabs = document.querySelectorAll('.feature-tab');
    const featurePanels = document.querySelectorAll('.feature-panel');

    featureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetFeature = tab.getAttribute('data-feature');
            
            // Remove active class from all tabs and panels
            featureTabs.forEach(t => t.classList.remove('active'));
            featurePanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding panel
            const targetPanel = document.getElementById(targetFeature);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Use case tabs functionality
function initializeUseCaseTabs() {
    const useCaseTabs = document.querySelectorAll('.use-case-tab');
    const useCasePanels = document.querySelectorAll('.use-case-panel');

    useCaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetCase = tab.getAttribute('data-case');
            
            // Remove active class from all tabs and panels
            useCaseTabs.forEach(t => t.classList.remove('active'));
            useCasePanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding panel
            const targetPanel = document.getElementById(targetCase);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = mobileMenuToggle.classList.contains('active');
            
            if (isOpen) {
                // Close menu
                mobileMenuToggle.classList.remove('active');
                if (navMenu) navMenu.style.display = 'none';
                if (navActions) navActions.style.display = 'none';
            } else {
                // Open menu
                mobileMenuToggle.classList.add('active');
                if (navMenu) {
                    navMenu.style.display = 'flex';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.right = '0';
                    navMenu.style.backgroundColor = 'white';
                    navMenu.style.padding = '1rem';
                    navMenu.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
                }
                if (navActions) {
                    navActions.style.display = 'flex';
                    navActions.style.flexDirection = 'column';
                    navActions.style.gap = '1rem';
                    navActions.style.marginTop = '1rem';
                }
            }
        });
    }
}

// Voice chat widget functionality
function initializeVoiceChat() {
    const voiceChatToggle = document.querySelector('.voice-chat-toggle');
    
    if (voiceChatToggle) {
        voiceChatToggle.addEventListener('click', () => {
            // Simulate voice chat activation
            const originalText = voiceChatToggle.textContent;
            voiceChatToggle.textContent = 'Connecting...';
            voiceChatToggle.disabled = true;
            
            setTimeout(() => {
                alert('Voice chat feature would be available with ElevenLabs Conversational AI integration!');
                voiceChatToggle.textContent = originalText;
                voiceChatToggle.disabled = false;
            }, 1000);
        });
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.hero-content, .demo-interface, .voice-card, .music-card, .creator-card, .api-card, .update-card'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Form handling
function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    showErrorMessage(`Please fill in the ${input.name || 'required'} field.`);
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Simulate form submission
                showSuccessMessage('Thank you! Your message has been sent.');
                form.reset();
            }
        });
    });
}

// Demo text area functionality
function initializeDemoTextArea() {
    const textarea = document.querySelector('.demo-text-area textarea');
    const characterCount = document.querySelector('.character-count');
    
    if (textarea && characterCount) {
        textarea.addEventListener('input', function() {
            const count = this.value.length;
            const maxCount = 1000;
            characterCount.textContent = `${count}/${maxCount}`;
            
            if (count > maxCount) {
                this.value = this.value.substring(0, maxCount);
                characterCount.textContent = `${maxCount}/${maxCount}`;
            }
            
            // Update character count color based on usage
            if (count > maxCount * 0.9) {
                characterCount.style.color = '#ff6b6b';
            } else if (count > maxCount * 0.7) {
                characterCount.style.color = '#ffa726';
            } else {
                characterCount.style.color = '#666666';
            }
        });
    }
}

// Utility functions
function showErrorMessage(message) {
    showNotification(message, 'error');
}

function showSuccessMessage(message) {
    showNotification(message, 'success');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    switch (type) {
        case 'error':
            notification.style.backgroundColor = '#ff6b6b';
            break;
        case 'success':
            notification.style.backgroundColor = '#51cf66';
            break;
        default:
            notification.style.backgroundColor = '#339af0';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Keyboard navigation support
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Handle escape key to close modals/menus
        if (e.key === 'Escape') {
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle.active');
            if (mobileMenuToggle) {
                mobileMenuToggle.click();
            }
        }
        
        // Handle enter/space for custom buttons
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('play-btn') || 
                focusedElement.classList.contains('demo-tab') ||
                focusedElement.classList.contains('feature-tab') ||
                focusedElement.classList.contains('use-case-tab')) {
                e.preventDefault();
                focusedElement.click();
            }
        }
    });
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle scroll events here
        }, 16); // ~60fps
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error reports to analytics service
});

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeFormHandling();
    initializeDemoTextArea();
    initializeKeyboardNavigation();
    optimizePerformance();
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        simulateAudioPlayback,
        showNotification,
        showErrorMessage,
        showSuccessMessage
    };
}
