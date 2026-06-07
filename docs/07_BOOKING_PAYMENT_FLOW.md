# BaliGO Booking & Payment Flow

## COMPLETE BOOKING FLOW - USER JOURNEY

### STEP 1: EXPERIENCE BROWSING

**Location:** Bali Experience hub page or individual product page  
**User Actions:**

- Browse experience categories
- Read product overview, highlights
- View photo gallery
- Scroll through reviews & ratings

**System Display:**

- Quick facts (duration, group size, price)
- "Book Now" button prominent (sticky on scroll)
- Trust badges visible

**User Decision Point:**
Does user want to proceed with booking?

- YES → Continue to Step 2
- NO → Browse alternatives

---

### STEP 2: DATE SELECTION

**Location:** Booking widget (right column on desktop, above fold on mobile)  
**UI Component:** Interactive calendar

**Calendar Features:**

- Show 3-month calendar view
- Available dates highlighted in GREEN
- Unavailable dates grayed out (GRAY)
- Past dates disabled
- Selected date highlighted in PRIMARY COLOR (orange)
- "← Previous" / "Next →" navigation buttons

**User Actions:**

- Click on available date
- Calendar updates to show availability for that date

**System Display:**

- "You selected: [Date formatted: Monday, June 10, 2024]"
- Proceeds automatically to Step 3

---

### STEP 3: TIME SELECTION

**Location:** Same booking widget, below calendar

**Time Picker UI:**

- Dropdown menu showing "Select Time"
- Click to expand showing available time slots (e.g., 6:00 AM, 7:00 AM, 8:00 AM)
- Time slots show availability status
- Example format:
  ```
  06:00 AM - Available (8 spots)
  07:00 AM - Available (5 spots)
  08:00 AM - FULL (0 spots)
  ```
- Selected time highlighted

**User Actions:**

- Click on available time slot
- Selection confirmed

**System Display:**

- "You selected: 6:00 AM"
- Proceeds to Step 4

---

### STEP 4: PARTICIPANT COUNT

**Location:** Below time selection

**Participant Counter UI:**

- Display current count (starts at 1)
- "-" (minus) button on left (disabled if count = minimum)
- Number display in center
- "+" (plus) button on right (disabled if count = maximum)
- Show min/max constraints: "2-10 people maximum"
- Show group size pricing hint if applicable (e.g., "Group discount applies for 6+ people")

**User Actions:**

- Click "+" to add participants (up to maximum)
- Click "-" to remove participants (down to minimum)
- Counter updates real-time

**System Display:**

- "Number of participants: [X]"
- Dynamic price recalculates below

---

### STEP 5: DYNAMIC PRICE CALCULATION

**Location:** Booking widget, below participant counter

**Price Display Format:**

```
═══════════════════════════════
  PRICE BREAKDOWN
───────────────────────────────
Base Price:        $55 per person
× [X] participants
───────────────────────────────
Subtotal:          $[XXX]
Taxes & Fees:      $[XX]
───────────────────────────────
TOTAL PRICE:       $[XXX]
═══════════════════════════════
```

**Price Calculation Logic:**

- Base price varies by experience
- Group discounts: 6-8 people (-5%), 9+ people (-10%)
- Peak season surcharge: +15% (Dec-Jan)
- Taxes (typically 10% PPN in Indonesia)
- Fees (payment processing ~3%)
- Dynamic updates as participants change

**User Sees:**

- Real-time price update as they adjust participants
- Color-coded: Subtotal (gray), Total (bold, primary color)
- "What's included" link → show inclusions checklist

---

### STEP 6: REVIEW & CONFIRM

**Location:** Below price breakdown

**Confirmation Summary Box:**

```
✓ Experience: [Experience Name]
✓ Date: [Formatted Date]
✓ Time: [Time]
✓ Participants: [Number]
✓ Total Price: $[XXX]
```

**User Actions:**

- Review booking details
- Can edit any field (click to go back to respective step)

---

### STEP 7: PRIMARY CTA - BOOK NOW

**Location:** Below confirmation summary

**"Book Now" Button:**

- High-contrast color (warm orange #FF8C42)
- Large, clickable area (50px height minimum)
- Button text: "Book Now" or "Proceed to Checkout"
- Hover state: Slightly darker shade, shadow effect
- Click → Navigate to Checkout Page

**Alternative CTA:**

- "Chat with guide first" → Redirect to WhatsApp
- "Ask a question" → Open contact form modal

---

---

## CHECKOUT PAGE FLOW

### CHECKOUT HEADER

**Location:** Top of checkout page  
**Display:**

- Progress indicator: "Step 2 of 3: Your Details"
- Experience name & date/time summary
- Option to edit: "Edit booking details" link (returns to product page)

---

### SECTION A: PERSONAL INFORMATION

**Required Fields:**

**1. Full Name**

- Text input field
- Validation: 2-100 characters, letters only
- Placeholder: "Enter your full name"
- Required indicator: \*

**2. Email Address**

- Email input field
- Validation: Valid email format
- Placeholder: "you@example.com"
- Help text: "Booking confirmation will be sent here"
- Required indicator: \*

**3. Phone Number**

- Phone input field (with country code selector)
- Format: +[country code] [number]
- Default country: Indonesia (+62)
- Validation: Valid phone format
- Help text: "For activity day contact & WhatsApp"
- Required indicator: \*

**4. Country of Residence**

- Dropdown selector
- Alphabetically sorted list of countries
- Selected: User can type to filter
- Used for: Contact context, marketing purposes
- Optional

**5. Number of Participants (Already Selected)**

- Display only (non-editable): "Participants: [X]"
- Can edit → link back to booking widget

---

### SECTION B: SPECIAL REQUESTS & NOTES

**Optional Field:**

**Message/Requests**

- Text area (max 500 characters)
- Placeholder text: "Let us know if you have allergies, mobility issues, photography preferences, or other requests we should know..."
- Character counter: "0/500"
- Examples below:
  - "Vegetarian meals"
  - "Photography focus"
  - "Celebrate birthday"
  - "Medical considerations"

---

### SECTION C: TERMS & CONDITIONS

**Checkboxes:**

**1. Cancellation Policy**

- Checkbox: "I understand and agree to the cancellation policy"
- Link: "Read full cancellation policy" (opens modal or separate page)
- Required indicator: \*
- Policy Summary:
  - Free cancellation up to 7 days
  - 50% refund 3-7 days prior
  - No refund within 3 days
  - Weather-related cancellations: full refund or reschedule

**2. Terms of Service**

- Checkbox: "I agree to BaliGO Terms of Service and Privacy Policy"
- Links: "Terms" / "Privacy Policy" (opens modals)
- Required indicator: \*

**3. Marketing Opt-in (Optional)**

- Checkbox: "Send me travel tips, special offers, and updates" (unchecked by default)
- Optional

---

### SECTION D: REVIEW BOOKING

**Summary Box:**

```
═══════════════════════════════════════
  BOOKING SUMMARY
───────────────────────────────────────
Experience:    [Name]
Date:          [Formatted]
Time:          [Time]
Participants:  [Number]
Name:          [Customer Name]
Email:         [Email]
Phone:         [Phone]

TOTAL PRICE:   $[XXX]
═══════════════════════════════════════
```

**Edit Links:**

- "Edit experience details" → back to product booking widget
- "Edit personal info" → scroll back to Section A
- "Edit special requests" → scroll to Section B

---

### SECTION E: PAYMENT METHOD SELECTION

**Location:** Below booking summary

**Heading:** "How would you like to pay?"

**Payment Option 1: Credit Card**

- Radio button: ◯ Credit Card
- Description: "Visa, Mastercard, Amex"
- Icon: Credit card graphic

**Payment Option 2: PayPal**

- Radio button: ◯ PayPal
- Description: "Fast & secure payment"
- Icon: PayPal logo

**Payment Option 3: Bank Transfer**

- Radio button: ◯ Bank Transfer (Indonesia)
- Description: "Direct transfer to BaliGO account"
- Icon: Bank icon
- Expandable info: Shows bank details (account number, bank name)

**Payment Option 4: WhatsApp Inquiry**

- Radio button: ◯ Pay via WhatsApp
- Description: "Discuss payment options directly"
- Note: "We'll send secure payment link via WhatsApp"
- Icon: WhatsApp icon

**Default Selection:** Credit Card (most common)

---

### SECTION F: PAYMENT METHOD DETAILS

**Displayed based on selected method:**

#### If Credit Card Selected:

- Card Number field (16 digits, formatted: XXXX-XXXX-XXXX-XXXX)
- Cardholder Name field
- Expiration Date (MM/YY dropdown)
- CVV/Security Code (3-4 digits)
- Billing Address (auto-filled from registration, editable)
- "Save card for future bookings" checkbox (optional)
- Payment processor badge: "Secure payment by Stripe" (or provider)

#### If PayPal Selected:

- "You will be redirected to PayPal to complete payment securely"
- PayPal logo/branding shown

#### If Bank Transfer Selected:

- Display transfer details:
  ```
  Bank: [Bank Name]
  Account: [Account Number]
  Account Name: BaliGO Tours
  Amount: $[Total] IDR equivalent
  Reference: [Booking Reference #]
  ```
- "Transfer complete? Click here to confirm" button
- Upload receipt option (optional)

#### If WhatsApp Selected:

- Message template shown for copy/paste
- WhatsApp button: "Send via WhatsApp"
- Opens WhatsApp with pre-populated message

---

### SECTION G: PRIMARY CTA - COMPLETE BOOKING

**Location:** Below payment method details

**"Complete Booking" Button:**

- Large, high-contrast (warm orange)
- Text: "Complete Booking & Pay $[XXX]"
- Shows total amount in button
- Hover state: Darker shade, animation
- Click validation:
  - All required fields filled? YES → Proceed to payment processing
  - If NO → Show error messages next to unfilled fields

**Security Trust Signals Below Button:**

- "🔒 Secure & encrypted payment"
- "💳 PCI DSS compliant"
- SSL certificate indicator
- Payment processor logo

---

### ERROR HANDLING

**If form validation fails:**

- Show inline error messages (red text under field)
- Error icons next to invalid fields
- Summary error box at top: "Please correct the following errors:"
- Focus on first invalid field

**Common errors:**

- Missing required fields: "[Field Name] is required"
- Invalid email: "Please enter a valid email"
- Invalid phone: "Please enter a valid phone number"
- Payment details: "Card number is invalid"

---

### PAYMENT PROCESSING

**After "Complete Booking" clicked:**

1. Form data validated (client-side & server-side)
2. Payment processor initiated
3. User sees: "Processing payment..."
4. Progress indicator/spinner shown
5. Typical processing time: 2-5 seconds

**If Payment Successful:**
→ Proceed to Confirmation Page (Step 3 of 3)

**If Payment Failed:**

- Error message: "Payment declined. Please try again."
- Reason displayed (if available): "Card expired" / "Insufficient funds" / "Card blocked"
- Option to: Edit payment method, try different payment method, contact support
- Contact support link: "Need help? Chat with us"

---

---

## CONFIRMATION PAGE

### HEADER

**Location:** Top of page  
**Display:**

- ✓ Checkmark icon
- "Booking Confirmed!"
- Celebration message: "Your adventure awaits!"

---

### CONFIRMATION DETAILS

**Confirmation Number:**

```
Confirmation #: BG-2024-06-10-001234
Date Booked: June 10, 2024 at 14:23 (Bali Time)
```

**Experience Confirmed:**

```
═══════════════════════════════════════
Experience:     [Experience Name]
Date:           [Full date: Monday, June 15, 2024]
Time:           [Time: 6:00 AM]
Duration:       [Length: 5-6 hours]
Location:       [Primary location]
Participants:   [Number] people
Guide Name:     [Assigned guide name, if applicable]
───────────────────────────────────────
Total Amount:   $[XXX]
Paid:           ✓ [Payment method]
─────────────────────────────────────────
```

---

### IMPORTANT INFORMATION

**What's Included:**

- Bulleted list of inclusions
- Example:
  - ✓ Hotel pickup & dropoff
  - ✓ Professional guide
  - ✓ Light breakfast
  - ✓ Travel insurance

**What's NOT Included:**

- Bulleted list of exclusions
- Example:
  - Lunch (except breakfast)
  - Personal shopping/souvenirs
  - Tips/gratuities

**Know Before You Go:**

- Key info reminder (1-2 lines)
- Example: "Please arrive hotel lobby 15 minutes before pickup"
- Link to full booking details

**Weather Policy:**

- Short summary (1 line)
- Link: "Read weather policy"

---

### DIGITAL VOUCHER SECTION

**Heading:** "Your Digital Voucher"

**Voucher Display:**

- PDF icon + "Download PDF Voucher"
- QR code (scannable, contains booking reference)
- Show on phone at activity location
- Text: "Show this to your guide on the activity day"
- Voucher includes:
  - Confirmation number
  - Experience name, date, time
  - Group size
  - Contact information
  - What to bring reminder

**Action Buttons:**

- 📥 "Download Voucher" (PDF download)
- 📧 "Email to myself" (resend to email)
- 📱 "Share via WhatsApp"
- 🖨️ "Print Voucher"

---

### CONTACT INFORMATION

**Your Booking Details:**

```
Name:           [Customer Name]
Email:          [Email]
Phone:          [Phone]
───────────────────────────────────────
Guide Contact:  [Guide name]
Guide Phone:    [+62 ###...]
WhatsApp:       [+62 ###...]
```

**Questions Before Activity?**

- "Chat with guide on WhatsApp" button
- "Contact us" link
- Support hours: "Available 9 AM - 6 PM Bali Time"

---

### POST-BOOKING EMAILS

**Email 1: Confirmation Email (Immediate)**
Sent to customer email within 1 minute:

- Subject: "Your BaliGO Booking Confirmed - Confirmation #BG-2024-06-10-001234"
- Body:
  - Greeting: "Hi [Name],"
  - Confirmation message
  - Booking details (experience, date, time, participants)
  - Voucher attached (PDF)
  - Download link to voucher
  - Guide contact information
  - "What to bring" checklist
  - Weather policy link
  - FAQ link
  - Support contact
  - CTA: "View full booking" button → booking dashboard

**Email 2: Reminder Email (1 week before)**
Sent 7 days prior to activity:

- Subject: "Reminder: Your BaliGO Adventure is Coming! 🎉"
- Gentle reminder of booking
- Activity details
- Download voucher reminder
- What to bring checklist
- Meeting point/pickup time
- Guide contact info
- "Message guide on WhatsApp" button
- FAQ: Common questions answered

**Email 3: Final Reminder (1 day before)**
Sent 24 hours prior:

- Subject: "Tomorrow's Your Day! Final Details for Your BaliGO Adventure"
- Weather update for next day (if applicable)
- Confirmation of pickup time/location
- Final tips
- Emergency contact info
- "Chat with guide" button
- Option to reschedule if needed

**Email 4: Post-Activity (24 hours after)**
Sent day after activity:

- Subject: "How was your BaliGO adventure? We'd love to hear! 💙"
- Thank you message
- Request for review/testimonial
- Photo gallery (if guide took pictures)
- Option to book another experience (recommendations)
- Referral program info ("Share & earn")
- Link to leave review

---

### ADMIN NOTIFICATIONS

**When Booking Confirmed - Admin Receives:**

1. **Dashboard Notification**
   - New booking alert in admin panel
   - Booking details populated

2. **Email to Guides**
   Subject: "New Booking: [Experience] - [Date] at [Time]"
   - Experience details
   - Participant count
   - Customer name & contact info
   - Customer special requests
   - Meeting point/logistics
   - Link to guide dashboard

3. **Email to Staff**
   Subject: "New Booking Confirmation - [Confirmation #]"
   - Full booking details
   - Payment confirmation
   - Customer info
   - Logistics checklist

---

### BOOKING DASHBOARD

**Customer Portal (After Login)**

- View all current & past bookings
- Download vouchers for each booking
- Message guide directly
- Reschedule or modify bookings
- Rate/review completed experiences
- View receipt & payment confirmation

---

### REFERRAL & POST-BOOKING CTAs

**"Share Your Adventure"**

- Referral program info
- "Refer a friend, get $20 credit"
- Share buttons:
  - WhatsApp
  - Facebook
  - Instagram
  - Email
  - Copy link

**"Book Your Next Adventure"**

- Recommendations based on interest
- Related experiences cards
- "Explore more tours" button → /bali-experience/

**"Write a Review"**

- Star rating (1-5)
- Review text area
- "Submit Review" button
- Reviews displayed publicly on experience page

---

## PAYMENT FLOW TECHNICAL DETAILS

### Payment Gateway Integration

**Recommended Payment Processors:**

1. **Stripe** - Primary (cards, PayPal)
   - API integration
   - Webhook for confirmation
   - Supports multiple currencies
   - Fraud detection

2. **PayPal** - Secondary
   - PayPal Commerce Platform
   - Hosted payment page option

3. **Local Indonesia Bank Transfer**
   - Manual verification option
   - Confirmation email with bank details
   - Transaction ID tracking

---

### Security Measures

- ✅ SSL/TLS encryption for all data transmission
- ✅ PCI DSS compliance for card data
- ✅ Tokenization of payment info (never stored)
- ✅ CSRF protection on forms
- ✅ Rate limiting on form submissions
- ✅ Google reCAPTCHA v3 on checkout
- ✅ Email verification for new accounts
- ✅ Phone number verification (optional OTP)

---

### Refund & Cancellation Policy

**Refund Processing:**

- Automated refund initiated based on cancellation policy
- Refund time: 3-5 business days for credit card
- Bank transfer refunds: 5-7 business days
- PayPal: 1-2 business days

**Refund Status:**

- Email notification when refund initiated
- Email confirmation when refund processed
- Dashboard shows refund status
- Refund receipt sent via email

---

### Tax & Fee Handling

**Indonesia Tax (PPN - 10%):**

- Automatically added to total
- Remitted to Indonesia government quarterly
- Itemized on receipt

**Payment Processing Fees (3%):**

- Absorbed by BaliGO (not passed to customer)
- Incentive to choose direct bank transfer

**Hidden Charges:**

- None - all fees visible during checkout
- What-you-see-is-what-you-pay philosophy
- Trust builder

---

## MOBILE CHECKOUT OPTIMIZATION

**Mobile-Specific:**

- Single-column layout (all sections stack)
- Large touch targets (minimum 44x44px)
- Auto-fill enabled for known fields
- One-tap payment options (Apple Pay, Google Pay)
- Progress indicator at top (shows Step X of 3)
- Sticky price summary (always visible)
- Minimal scrolling between sections
- Mobile-optimized forms (input type="tel", input type="email", etc.)
- Fast loading (<3 seconds target)

---

## ACCESSIBILITY

**WCAG 2.1 AA Compliance:**

- Proper heading hierarchy
- Form labels associated with inputs
- Aria labels for icons
- Color contrast (4.5:1 minimum)
- Keyboard navigation support
- Error messages linked to fields
- Skip navigation links

---

## CONVERSION OPTIMIZATION

**Checkout Abandonment Recovery:**

- Save progress (draft bookings)
- Email reminder of abandoned cart (within 1 hour)
- "Complete your booking" link in email
- One-click recovery link (no re-entry needed)
- Incentive: "Complete booking to save progress"

**Friction Reduction:**

- Guest checkout option (no account required)
- Social login (Google, Facebook)
- Pre-filled fields (if logged in)
- AutoSave form data
- Clear error messages
- Progress indicators
- Estimated completion time shown

**A/B Testing Variables:**

- CTA button text ("Book Now" vs "Secure Booking" vs "Confirm & Pay")
- Payment method order
- Trust badges location/prominence
- Price display format
- Form field grouping
- Checkout step count

---

## BOOKING METRICS TO TRACK

**Conversion Funnel:**

- Product page views → Bookings
- Booking widget clicks → Checkout starts
- Checkout starts → Payment page
- Payment page → Successful payment
- Abandonment rates at each step

**Key Performance Indicators (KPIs):**

- Checkout conversion rate (target: 30-40%)
- Average time to complete booking
- Payment method popularity
- Refund/cancellation rate
- Customer satisfaction (post-booking NPS)
- Error rates by form field
