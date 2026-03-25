# Praanvee LLP Website

## Current State
New project — no existing application.

## Requested Changes (Diff)

### Add
- Full company website for Praanvee LLP
- Hero section with company tagline and overview
- Services section: IT & digital services, business/management consulting, process optimization, IT-enabled services, training & skill development, real estate leasing/property management, agriculture
- Organic Produce showcase: Alphonso, Kesar, Sonpari mangoes, bananas, coconuts, guavas, custard apple, figs, mulberries
- Order section: clients can order Organic Mangoes (by box; 1 box = 2.5 dozen, ₹1100/box) and Organic Bananas (by dozen, ₹150/dozen). Form fields: name, email, phone, address, product selection (mango variety or banana), quantity
- Order stored in backend; email sending NOT available (disabled on current plan)
- Contact section: Tower No. 8, Amanora Aspire Towers, Hadapsar, Pune 411028, India | +91 7069553814
- Footer with company info

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: store orders (name, email, phone, address, product, quantity, timestamp)
2. Backend: query all orders (admin use later)
3. Frontend: hero, services, produce showcase, order form, contact, footer sections
4. Order form calculates total price dynamically before submission
5. On submit, call backend to save order; show confirmation message
