---
title: Coupons
---

Create discount codes from **Admin → Coupons**.

Fields:
- `code` unique ID (e.g., SPRING10)
- `type` **percent** or **fixed**
- `value` percentage (if percent) or ignore
- `value_cents` fixed discount in cents (if fixed)
- `is_active`, `starts_at`, `ends_at`
- `max_uses` (optional limit)

Usage count increases automatically when orders apply the coupon.
