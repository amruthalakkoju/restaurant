import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { DishCategory, MenuItem } from '../types';
import { VegIcon, NonVegIcon } from './VectorVisuals';
import { Search, SlidersHorizontal, Flame, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: (dishName?: string) => void;
}

const CATEGORIES: DishCategory[] = [
  'All',
  'Starters',
  'Vegetarian',
  'Non-Vegetarian',
  'Main Course',
  'Biryani',
  'Breads',
  'Desserts',
  'Beverages',
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      // Search match
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.region && item.region.toLowerCase().includes(searchQuery.toLowerCase()));
      // Veg only toggle
      const vegMatch = !vegOnly || item.isVeg;

      return categoryMatch && searchMatch && vegMatch;
    });
  }, [selectedCategory, searchQuery, vegOnly]);

  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, 12);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0c0c0f] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Culinary Repertoire
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            The AURA Menu
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-2xl mx-auto">
            A celebration of regional Indian spices, heritage tandoor techniques, and slow-dum simmered royal pots.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-6">
          {/* Category Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase rounded-sm transition-all whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] ${
                    isActive
                      ? 'bg-[#d4af37] text-[#0c0c0f] shadow-md shadow-[#d4af37]/20 font-semibold'
                      : 'bg-[#15151e] text-[#a9a5b3] hover:text-[#f6f3eb] hover:bg-[#1d1d28] border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Toggle Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#121219] p-3.5 rounded-sm border border-white/5">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#a9a5b3] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish, spice, or region..."
                className="w-full pl-9 pr-4 py-1.5 text-xs text-[#f6f3eb] bg-[#1a1a24] border border-white/10 rounded-sm focus:outline-none focus:border-[#d4af37] placeholder-[#7d7a87]"
              />
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-6">
              {/* Veg Only Toggle */}
              <label className="flex items-center gap-2.5 text-xs text-[#ded8c8] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={(e) => setVegOnly(e.target.checked)}
                  className="rounded border-zinc-700 text-[#d4af37] focus:ring-[#d4af37] w-4 h-4 bg-zinc-900 cursor-pointer"
                />
                <span className="flex items-center gap-1.5">
                  <VegIcon size={14} />
                  <span>Vegetarian Only</span>
                </span>
              </label>

              <div className="text-xs text-[#9d9aa7] font-mono tabular-nums">
                {filteredItems.length} {filteredItems.length === 1 ? 'Dish' : 'Dishes'}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#14141d] border border-white/5 rounded-sm">
            <p className="font-serif text-xl text-[#ded8c8] mb-2">No dishes match your selection</p>
            <p className="text-xs text-[#9d9aa7] mb-4">Try clearing filters or search terms</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setVegOnly(false);
              }}
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37]/10 rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((dish) => (
              <div
                key={dish.id}
                className="group p-5 bg-[#12121a] border border-white/5 hover:border-[#d4af37]/40 rounded-sm transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      {dish.isVeg ? <VegIcon size={14} /> : <NonVegIcon size={14} />}
                      <h3 className="font-serif text-lg sm:text-xl text-[#f6f3eb] group-hover:text-[#d4af37] transition-colors leading-tight">
                        {dish.name}
                      </h3>
                    </div>
                    <span className="font-serif text-lg font-semibold text-[#d4af37] tabular-nums shrink-0">
                      ₹{dish.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#ded8c8] leading-relaxed font-light mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9d9aa7]">
                  <span className="tracking-wide">
                    {dish.region ? dish.region : dish.category}
                  </span>
                  {dish.spiceLevel && (
                    <span className="flex items-center gap-1 text-[#e0a96d]">
                      <Flame className="w-3 h-3 text-[#f77f00]" />
                      <span>{dish.spiceLevel}</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Menu / Collapse Toggle Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#f6f3eb] hover:text-[#0c0c0f] bg-[#1a1924] hover:bg-[#d4af37] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all rounded-sm shadow-md cursor-pointer"
            >
              {isExpanded ? 'Collapse Menu' : 'View Full Menu'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
