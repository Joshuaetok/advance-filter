// Documentation database (complete from previous version)
const docsDB = {
    quickstart: {
        title: 'Quick Start',
        icon: 'fa-rocket',
        body: `<p><strong>Advanced Product Filter for WooCommerce</strong> is an AJAX filtering system that supports standard WooCommerce loops and Elementor Pro Loop Grids. It uses <code>history.pushState</code> for shareable URLs and 5‑minute transients for performance.</p>
        <p><strong>Requirements:</strong> WordPress 5.8+, WooCommerce 5.0+, Elementor Pro (only for Loop Grid).</p>
        <p><strong>Deployment:</strong><br>
        • <i class="fas fa-widget"></i> Elementor widget: drag “Advanced Product Filter”<br>
        • <i class="fas fa-code"></i> Shortcode: <code>[apf_filters]</code></p>`
    },
    container: {
        title: 'Container Class – AJAX Foundation',
        icon: 'fa-bullseye',
        body: `<p>The target container selector tells the plugin where to inject filtered products. Find it via browser inspector: the direct parent wrapper of your product grid (e.g., <code>.products</code> or <code>.elementor-loop-container</code>).</p>
        <p><strong>Test in console:</strong> <code>document.querySelector('.your-class')</code> should return the grid element.</p>
        <p><strong>Set it:</strong><br>
        • Elementor widget: <em>Content > Settings > Target Container Selector</em><br>
        • Shortcode: <code>[apf_filters container=".your-class"]</code></p>`
    },
    elementor: {
        title: 'Elementor Loop Grid Integration',
        icon: 'fab fa-elementor',
        body: `<p><strong>Step 1 – Obtain Template ID:</strong> Go to <strong>Templates > Saved Templates</strong>, hover “Edit” and copy the <code>post=</code> number (e.g., <code>1245</code>).</p>
        <p><strong>Step 2 – Configure Loop Grid:</strong> Add a Query ID (e.g., <code>my_grid</code>) in the Loop Grid widget’s Advanced tab.</p>
        <p><strong>Step 3 – Connect filter:</strong><br>
        • <em>Widget:</em> Set “Filter Target” to “Elementor Loop Grid”, enter Query ID and Template ID, container <code>.elementor-widget-loop-grid</code>.<br>
        • <em>Shortcode:</em> <code>[apf_filters filter_mode="elementor" loop_query_id="my_grid" loop_template_id="1245" container=".elementor-widget-loop-grid"]</code></p>
        <p>Backend uses <code>\Elementor\Plugin::frontend->get_builder_content_for_display()</code> to inject styles and HTML.</p>`
    },
    shortcode: {
        title: 'Shortcode Reference',
        icon: 'fa-code',
        body: `<p><strong>Main shortcode:</strong> <code>[apf_filters]</code> or <code>[advanced_product_filter]</code>. Each instance is isolated with a unique wrapper and <code>window.apfw_instances</code> data.</p>
        <p><strong>Key attributes:</strong><br>
        <code>container</code> – CSS selector (default <code>.products</code>)<br>
        <code>filter_mode</code> – <code>standard</code> or <code>elementor</code><br>
        <code>loop_query_id</code> – Elementor Query ID<br>
        <code>loop_template_id</code> – Elementor template ID<br>
        <code>fields_to_show</code> – e.g., <code>"categories,price,size,color,rating,stock"</code><br>
        <code>cat_display_style</code> – <code>buttons</code> or <code>dropdown</code><br>
        <code>size_attribute</code> – taxonomy slug (e.g., <code>pa_size</code>)<br>
        <code>color_attribute</code> – taxonomy slug (e.g., <code>pa_color</code>)<br>
        <code>show_title</code> – <code>yes</code>/<code>no</code><br>
        <code>title_text</code> – custom title</p>
        <p><strong>Example:</strong> <code>[apf_filters container=".products" fields_to_show="categories,price"]</code></p>`
    },
    widget: {
        title: 'Elementor Widget Settings',
        icon: 'fa-cog',
        body: `<p><strong>Content Tab:</strong><br>
        • Filter Content: map taxonomies (e.g., <code>pa_size</code> to Size), enable fields.<br>
        • Settings: Target container, Loop Grid Query ID/Template ID, cache‑busting toggle.</p>
        <p><strong>Style Tab:</strong> Extensive controls for container, buttons, sliders, checkboxes – shadows, borders, typography.</p>
        <p><strong>JavaScript isolation:</strong> Each widget instance reads <code>data-*</code> attributes and attaches debounced events (300ms clicks, 800ms typing) to prevent conflicts.</p>`
    },
    troubleshooting: {
        title: 'AJAX Troubleshooting',
        icon: 'fa-exclamation-triangle',
        body: `<table style="width:100%; border-collapse:collapse;">
            <tr><th style="text-align:left;">Error</th><th style="text-align:left;">Solution</th></tr>
            <tr><td><code>"Filter failed"</code></td><td>Enable WP_DEBUG, check console/logs. Resave permalinks.</td></tr>
            <tr><td>403 Forbidden</td><td>Nonce expired? Exclude admin-ajax.php and /wp-json/ from caching.</td></tr>
            <tr><td>Container not updating</td><td>Wrong container selector – double‑check with DevTools.</td></tr>
            <tr><td>Add‑to‑cart broken</td><td>Plugin fires <code>wc_fragments_refreshed</code> – ensure jQuery events bubble.</td></tr>
            <tr><td>Elementor styles missing</td><td>Verify template ID; plugin triggers <code>elementorFrontend.elementsHandler.runReadyTrigger</code>.</td></tr>
            <tr><td>Filters affecting wrong grid</td><td>Use unique instances (shortcode/widget automatically isolate).</td></tr>
        </table>`
    },
    checklist: {
        title: 'Testing Checklist',
        icon: 'fa-check-circle',
        body: `<ul style="margin-left:20px;">
            <li><i class="fas fa-check" style="color:#007cba;"></i> Clicking a filter triggers a 300ms delayed AJAX request (spinner appears).</li>
            <li><i class="fas fa-check" style="color:#007cba;"></i> Product grid updates without page reload.</li>
            <li><i class="fas fa-check" style="color:#007cba;"></i> WooCommerce pagination works via AJAX.</li>
            <li><i class="fas fa-check" style="color:#007cba;"></i> “Add to cart” on newly loaded products works.</li>
            <li><i class="fas fa-check" style="color:#007cba;"></i> Browser back/forward restores filter state.</li>
            <li><i class="fas fa-check" style="color:#007cba;"></i> Multiple filter instances operate independently.</li>
        </ul>`
    },
    faq: {
        title: 'Frequently Asked Questions',
        icon: 'fa-question-circle',
        body: `<p><strong>Q: Why doesn't the filter update my grid?</strong><br>A: 90% wrong container selector. Follow the “Container Class” guide.</p>
        <p><strong>Q: Does it work with caching plugins?</strong><br>A: Yes. Uses 5‑minute transients and offers “Force Real‑Time Updates” (cache‑busting <code>_cb</code> parameter).</p>
        <p><strong>Q: How to prevent scroll to top after filter?</strong><br>A: JS automatically scrolls to grid (offset 100px) – configurable.</p>
        <p><strong>Q: Can I style the shortcode globally?</strong><br>A: Yes, under <strong>WooCommerce > Settings > Advanced Filter</strong> → Shortcode Appearance.</p>
        <p><strong>Q: How are parameters processed?</strong><br>A: Sanitized and mapped to <code>WP_Query</code> (<code>tax_query</code>, <code>meta_query</code>) in <code>APFW_Filter_Ajax::apply_elementor_filters()</code>.</p>`
    }
};

// ----- Populate dynamic menus and set up search -----
document.addEventListener('DOMContentLoaded', function() {
    // Populate sidebar doc menu from docsDB
    const docMenu = document.getElementById('docMenu');
    if (docMenu) {
        Object.keys(docsDB).forEach((key, index) => {
            const item = docsDB[key];
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.setAttribute('data-topic', key);
            if (index === 0) a.classList.add('active');
            a.innerHTML = `<i class="fas ${item.icon}"></i> ${item.title}`;
            li.appendChild(a);
            docMenu.appendChild(li);
        });
    }

    // Populate footer menu with all topics
    const footerMenu = document.getElementById('dynamic-footer-menu');
    if (footerMenu) {
        Object.keys(docsDB).forEach(key => {
            const item = docsDB[key];
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + key;
            link.textContent = item.title;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sidebarLink = document.querySelector(`.doc-menu a[data-topic="${key}"]`);
                if (sidebarLink) sidebarLink.click();
                // Scroll to docs panel
                document.getElementById('docs-panel-target').scrollIntoView({ behavior: 'smooth' });
            });
            li.appendChild(link);
            footerMenu.appendChild(li);
        });
    }

    // ----- Real‑time search filtering -----
    const searchInput = document.getElementById('docSearch');
    const menuItems = document.querySelectorAll('.doc-menu li');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase().trim();
            menuItems.forEach(li => {
                const link = li.querySelector('a');
                if (link) {
                    const text = link.textContent.toLowerCase();
                    if (term === '' || text.includes(term)) {
                        li.classList.remove('hidden');
                    } else {
                        li.classList.add('hidden');
                    }
                }
            });
        });
    }

    // ----- Header menu links (Quick Start, Checklist, FAQs) -----
    const headerLinks = document.querySelectorAll('.nav-links a[data-topic]');
    headerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const topic = this.dataset.topic;
            const sidebarLink = document.querySelector(`.doc-menu a[data-topic="${topic}"]`);
            if (sidebarLink) sidebarLink.click();
            // Scroll to docs panel
            document.getElementById('docs-panel-target').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ----- AJAX simulation logic -----
    const menuLinks = document.querySelectorAll('.doc-menu a');
    const docDisplay = document.getElementById('docDisplay');
    const loadingSpinner = document.getElementById('loadingSpinner');
    let currentActiveLink = document.querySelector('.doc-menu a.active');

    function fetchDocByTopic(topicKey) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (docsDB.hasOwnProperty(topicKey)) {
                    resolve(docsDB[topicKey]);
                } else {
                    reject(new Error('Documentation not found'));
                }
            }, 350);
        });
    }

    function renderDoc(docData) {
        if (!docData) return;
        const iconHtml = `<i class="fas ${docData.icon}" style="font-size: 2rem; color:#007cba; background:#e6f2fa; padding:12px; border-radius:18px;"></i>`;
        docDisplay.innerHTML = `
            <div class="doc-header">
                ${iconHtml}
                <span class="doc-title">${docData.title}</span>
            </div>
            <div class="doc-body">
                ${docData.body}
            </div>
            <p style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size:0.9rem; color:#64748b;">
                <i class="fas fa-sync-alt" style="margin-right: 6px;"></i> Last updated: 2025-03-13 · loaded via simulated AJAX
            </p>
        `;
    }

    function loadTopic(topicKey, clickedLink) {
        if (docDisplay) docDisplay.style.opacity = '0.3';
        loadingSpinner.style.display = 'flex';

        fetchDocByTopic(topicKey)
            .then(docData => {
                renderDoc(docData);
                if (currentActiveLink) {
                    currentActiveLink.classList.remove('active');
                }
                clickedLink.classList.add('active');
                currentActiveLink = clickedLink;
                window.location.hash = topicKey;
            })
            .catch(error => {
                docDisplay.innerHTML = `<div style="color:#b91c1c; background:#fee; padding:32px; border-radius:24px;"><i class="fas fa-exclamation-triangle"></i> Error: ${error.message}</div>`;
            })
            .finally(() => {
                loadingSpinner.style.display = 'none';
                if (docDisplay) docDisplay.style.opacity = '1';
            });
    }

    // Attach click listeners to doc menu (sidebar) and add scroll
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const topic = this.dataset.topic;
            if (!topic) return;
            loadTopic(topic, this);
            // Scroll to docs panel
            document.getElementById('docs-panel-target').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initial load based on hash or default
    const startTopic = () => {
        const hash = window.location.hash.replace('#', '');
        let topicToLoad = 'quickstart';
        let linkToActivate = document.querySelector('.doc-menu a[data-topic="quickstart"]');

        if (hash && docsDB[hash]) {
            topicToLoad = hash;
            linkToActivate = document.querySelector(`.doc-menu a[data-topic="${hash}"]`);
        }

        if (linkToActivate) {
            menuLinks.forEach(l => l.classList.remove('active'));
            linkToActivate.classList.add('active');
            currentActiveLink = linkToActivate;
            loadingSpinner.style.display = 'flex';
            docDisplay.style.opacity = '0.3';
            fetchDocByTopic(topicToLoad)
                .then(docData => renderDoc(docData))
                .catch(err => {
                    docDisplay.innerHTML = `<div style="color:#b91c1c;">Error: ${err.message}</div>`;
                })
                .finally(() => {
                    loadingSpinner.style.display = 'none';
                    docDisplay.style.opacity = '1';
                });
        }
    };

    startTopic();
});