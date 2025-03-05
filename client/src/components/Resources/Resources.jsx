import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Section = ({ title, icon, items, count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lgreen text-2xl">{icon}</span>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        </div>
        <span className="bg-lgreen text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
          {count}
        </span>
      </div>
      {/* Items */}
      <ul className="list-none space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <span className="text-lgreen">
              <AiOutlineRight />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="px-4 py-2 bg-lgreen text-white rounded-lg hover:bg-hgreen">
          Explore More
        </button>
      </div>
    </div>
  );
};

const TutorialPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // To hold the search input
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); // Category dropdown
  const [suggestions, setSuggestions] = useState([]); // To hold filtered suggestions
  const history = useNavigate(); // Using useHistory for navigation
  const { t } = useTranslation();

  // List of predefined sections
  const sections = [
    {
      title: t('basic_tutorials'), // Translation key for title
      icon: <i className="fas fa-book"></i>,
      count: 10,
      items: [
        t('guide_to_launch_campaign'), // Translation keys for items
        t('import_contacts'),
        t('add_subscribers_to_blacklist'),
        t('connect_email_provider'),
        t('create_amazon_ses_key'),
        t('clean_email_list'),
        t('capture_leads_with_web_forms'),
        t('create_popup_forms'),
        t('create_regular_email_campaign'),
        t('create_automated_email_journey'),
      ],
    },
    {
      title: t('audience_list'), // Translation key for title
      icon: <i className="fas fa-users"></i>,
      count: 10,
      items: [
        t('intro_to_audience_list'),
        t('create_new_audience_list'),
        t('add_new_subscriber'),
        t('import_subscribers_bulk'),
        t('map_imported_csv_fields'),
        t('export_audience_subscribers'),
        t('create_personalized_email_using_custom_fields'),
        t('email_segmentation'),
        t('use_tags_to_segment_audience'),
        t('enable_double_opt_in'),
      ],
    },
    {
      title: t('email_campaign'), // Translation key for title
      icon: <i className="fas fa-envelope"></i>,
      count: 6,
      items: [
        t('monitor_email_campaign_performance'),
        t('intro_to_email_campaigns'),
        t('import_custom_html_templates'),
        t('customize_imported_html_templates'),
        t('design_html_email_templates'),
        t('launch_effective_email_campaign'),
      ],
    },
  ];
  

  // Handle search query change and filter suggestions
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Filter suggestions based on search input
      const filteredSuggestions = sections.flatMap((section) => {
        // Match section titles
        const matchedItems = section.items.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        
        // Return suggestions as section titles and matched items
        return [
          { type: "section", title: section.title },
          ...matchedItems.map((item) => ({ type: "item", title: item })),
        ];
      });

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle clicking on a suggestion to navigate
  const handleSuggestionClick = (suggestion) => {
    // If it's a section title, navigate to that section
    if (suggestion.type === "section") {
      history(`/section/${suggestion.title.toLowerCase().replace(/\s+/g, '-')}`);
    } else {
      // If it's an item, navigate to the specific tutorial or item
      history(`/tutorial/${suggestion.title.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto w-[500px] mt-20 p-6">
        {/* Search Bar */}
        <div className="rounded-lg shadow-lg p-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-gray-700 w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <select
            className="outline-none bg-gray-100 rounded-lg px-3 py-1"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option value="smtp">SMTP</option>
            <option value="amazon">Amazon SES</option>
            <option value="send">Send</option>
          </select>
          <button className="bg-lgreen text-white px-4 py-2 rounded-lg">
            SEARCH
          </button>
        </div>

        {/* Suggestions List */}
        {suggestions.length > 0 && (
          <div className="mt-2 bg-white shadow-md rounded-lg p-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </button>
            ))}
          </div>
        )}

        {/* Popular Searches */}
        <div className="mt-4 flex gap-2">
          <span className="text-gray-600">Popular Search:</span>
          <div className="flex gap-2">
            {["the", "smtp", "amazon", "send"].map((keyword) => (
              <button
                key={keyword}
                className="px-3 py-1 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200"
                onClick={() => setSearchQuery(keyword)}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-10 py-10 px-6 md:px-16">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        {t('tutorials_and_guide')}
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              icon={section.icon}
              items={section.items}
              count={section.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorialPage;
