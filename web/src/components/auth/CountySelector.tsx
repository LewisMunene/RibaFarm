'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

interface CountySelectorProps {
  county: string;
  subCounty: string;
  onCountyChange: (county: string) => void;
  onSubCountyChange: (subCounty: string) => void;
  countyError?: string;
  subCountyError?: string;
}

// Major Agricultural Counties (Top 20) + Others - moved outside component
const majorCounties = {
  // Central Kenya - Major Agricultural Hub
  kiambu: {
    name: "Kiambu",
    subCounties: ["Thika Town", "Ruiru", "Juja", "Gatundu South", "Gatundu North", "Githunguri", "Kiambu", "Kiambaa", "Kabete", "Kikuyu", "Limuru", "Lari"]
  },
  murang_a: {
    name: "Murang'a",
    subCounties: ["Kangema", "Mathioya", "Kiharu", "Kigumo", "Maragwa", "Kandara", "Gatanga"]
  },
  nyeri: {
    name: "Nyeri",
    subCounties: ["Tetu", "Kieni", "Mathira", "Othaya", "Mukurweini", "Nyeri Town"]
  },
  
  // Rift Valley - Agriculture Powerhouse
  nakuru: {
    name: "Nakuru",
    subCounties: ["Nakuru Town East", "Nakuru Town West", "Bahati", "Subukia", "Rongai", "Molo", "Njoro", "Naivasha", "Gilgil", "Kuresoi South", "Kuresoi North"]
  },
  uasin_gishu: {
    name: "Uasin Gishu",
    subCounties: ["Kapseret", "Kesses", "Moiben", "Turbo", "Soy", "Ainabkoi"]
  },
  trans_nzoia: {
    name: "Trans Nzoia",
    subCounties: ["Cherangany", "Endebess", "Saboti", "Kiminini", "Kwanza"]
  },
  nandi: {
    name: "Nandi",
    subCounties: ["Tinderet", "Aldai", "Nandi Hills", "Chesumei", "Emgwen", "Mosop"]
  },
  kericho: {
    name: "Kericho",
    subCounties: ["Ainamoi", "Bureti", "Belgut", "Sigowet/Soin", "Soin", "Kipkelion East", "Kipkelion West"]
  },
  
  // Eastern Kenya
  meru: {
    name: "Meru",
    subCounties: ["Igembe South", "Igembe Central", "Igembe North", "Tigania West", "Tigania East", "North Imenti", "Buuri", "Central Imenti", "South Imenti"]
  },
  machakos: {
    name: "Machakos",
    subCounties: ["Kangundo", "Matungulu", "Kathiani", "Mavoko", "Masinga", "Yatta", "Kalama", "Machakos Town"]
  },
  embu: {
    name: "Embu",
    subCounties: ["Manyatta", "Runyenjes", "Mbeere South", "Mbeere North"]
  },
  
  // Western Kenya
  kakamega: {
    name: "Kakamega",
    subCounties: ["Lugari", "Likuyani", "Malava", "Lurambi", "Navakholo", "Mumias West", "Mumias East", "Matungu", "Butere", "Khwisero", "Shinyalu", "Ikolomani"]
  },
  bungoma: {
    name: "Bungoma",
    subCounties: ["Mt. Elgon", "Sirisia", "Kabuchai", "Bumula", "Kanduyi", "Webuye East", "Webuye West", "Kimilili", "Tongaren"]
  },
  busia: {
    name: "Busia",
    subCounties: ["Teso North", "Teso South", "Nambale", "Matayos", "Butula", "Funyula", "Budalangi"]
  },
  
  // Nyanza
  kisumu: {
    name: "Kisumu",
    subCounties: ["Kisumu East", "Kisumu West", "Kisumu Central", "Seme", "Nyando", "Muhoroni", "Nyakach"]
  },
  kisii: {
    name: "Kisii",
    subCounties: ["Kitutu Chache North", "Kitutu Chache South", "Nyaribari Masaba", "Nyaribari Chache", "Bobasi", "Bomachoge Borabu", "Bomachoge Chache", "South Mugirango", "Bonchari"]
  },
  
  // Urban Centers (important for buyers)
  nairobi: {
    name: "Nairobi",
    subCounties: ["Starehe", "Kamukunji", "Embakasi East", "Embakasi West", "Embakasi Central", "Embakasi South", "Embakasi North", "Kasarani", "Ruaraka", "Mathare", "Westlands", "Dagoretti North", "Dagoretti South", "Langata", "Kibra", "Roysambu", "Makadara"]
  },
  mombasa: {
    name: "Mombasa",
    subCounties: ["Changamwe", "Jomba", "Kisauni", "Nyali", "Likoni", "Mvita"]
  },
  
  // Coast Agricultural
  kilifi: {
    name: "Kilifi",
    subCounties: ["Kilifi North", "Kilifi South", "Kaloleni", "Rabai", "Ganze", "Malindi", "Magarini"]
  },
  
  // Northern Agricultural
  laikipia: {
    name: "Laikipia",
    subCounties: ["Laikipia West", "Laikipia East", "Laikipia North"]
  }
};

export default function CountySelector({ 
  county, 
  subCounty, 
  onCountyChange, 
  onSubCountyChange, 
  countyError, 
  subCountyError 
}: CountySelectorProps) {
  const [availableSubCounties, setAvailableSubCounties] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);

  // Update sub-counties when county changes
  useEffect(() => {
    if (county === 'other') {
      setAvailableSubCounties([]);
      setShowOtherInput(true);
      // Reset sub-county when switching to "Other"
      if (subCounty) {
        onSubCountyChange('');
      }
    } else if (county && majorCounties[county as keyof typeof majorCounties]) {
      setAvailableSubCounties(majorCounties[county as keyof typeof majorCounties].subCounties);
      setShowOtherInput(false);
      // Reset sub-county when county changes
      if (subCounty) {
        onSubCountyChange('');
      }
    } else {
      setAvailableSubCounties([]);
      setShowOtherInput(false);
    }
  }, [county, subCounty, onSubCountyChange]);

  const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCounty = e.target.value;
    onCountyChange(selectedCounty);
  };

  const handleSubCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSubCountyChange(e.target.value);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* County Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="inline w-4 h-4 mr-1" />
          County
        </label>
        <select
          name="county"
          title="Select your county"
          value={county}
          onChange={handleCountyChange}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 font-medium ${
            countyError ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select County</option>
          
          {/* Major Agricultural Counties */}
          <optgroup label="🌾 Major Agricultural Counties">
            {Object.entries(majorCounties).map(([key, countyData]) => (
              <option key={key} value={key}>
                {countyData.name}
              </option>
            ))}
          </optgroup>
          
          {/* Other Counties */}
          <optgroup label="📍 Other Counties">
            <option value="other">Other County</option>
          </optgroup>
        </select>
        {countyError && <p className="mt-1 text-sm text-red-600">{countyError}</p>}
      </div>

      {/* Sub-County Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sub County
        </label>
        {showOtherInput ? (
          <input
            name="subCounty"
            type="text"
            value={subCounty}
            onChange={(e) => onSubCountyChange(e.target.value)}
            placeholder="Enter your sub county"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium ${
              subCountyError ? "border-red-500" : "border-gray-300"
            }`}
          />
        ) : (
          <select
            name="subCounty"
            title="Select your sub-county"
            value={subCounty}
            onChange={handleSubCountyChange}
            disabled={!county || availableSubCounties.length === 0}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 font-medium disabled:bg-gray-100 disabled:cursor-not-allowed ${
              subCountyError ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">
              {county ? "Select Sub County" : "Select county first"}
            </option>
            {availableSubCounties.map((subCountyName) => (
              <option key={subCountyName} value={subCountyName}>
                {subCountyName}
              </option>
            ))}
          </select>
        )}
        {subCountyError && <p className="mt-1 text-sm text-red-600">{subCountyError}</p>}
      </div>

      {/* Helper Text */}
      {county && (
        <div className="col-span-2 mt-2">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Selected: {county === 'other' ? 'Other County' : majorCounties[county as keyof typeof majorCounties]?.name}
            {subCounty && ` → ${subCounty}`}
          </p>
          {county === 'other' && (
            <p className="text-xs text-green-600 mt-1">
              💚 We're expanding to all counties soon! You're helping us grow.
            </p>
          )}
        </div>
      )}
    </div>
  );
}