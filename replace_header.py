import os
import glob

original = """    <div class="header-actions">
      <div class="nav-actions">
        <button id="rtl-toggle" class="toggle-btn" aria-label="Toggle RTL/LTR">LTR</button>
        <button id="theme-toggle" class="toggle-btn" aria-label="Toggle Theme">
          <i class="fa-solid fa-moon"></i>
        </button>
      </div>
      <button id="mobile-menu-btn" class="mobile-menu-btn toggle-btn" aria-label="Toggle Menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>"""

replacement = """    <div class="header-actions">
      <div class="auth-actions" style="display: flex; gap: 10px; margin-right: 15px; align-items: center;">
        <a href="login.html" class="btn-secondary" style="padding: 8px 16px; font-size: 0.9rem; text-decoration: none;">Login</a>
        <a href="signup.html" class="btn-primary" style="padding: 8px 16px; font-size: 0.9rem; text-decoration: none;">Sign Up</a>
      </div>
      <div class="nav-actions">
        <button id="rtl-toggle" class="toggle-btn" aria-label="Toggle RTL/LTR">LTR</button>
        <button id="theme-toggle" class="toggle-btn" aria-label="Toggle Theme">
          <i class="fa-solid fa-moon"></i>
        </button>
      </div>
      <button id="mobile-menu-btn" class="mobile-menu-btn toggle-btn" aria-label="Toggle Menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>"""

for filepath in glob.glob('*.html'):
    if filepath not in ['login.html', 'signup.html']:
        with open(filepath, 'r') as f:
            content = f.read()
        if original in content:
            new_content = content.replace(original, replacement)
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
        else:
            print(f"Pattern not found in {filepath}")

