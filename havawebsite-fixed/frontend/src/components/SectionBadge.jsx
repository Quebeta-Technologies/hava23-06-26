import React from 'react';

/**
 * SectionBadge — small uppercase tag with dot indicator.
 * Matches home page styling (bg-{color}/10 + text-{color} + rounded-full).
 */
export const SectionBadge = ({ children, color = 'hava-red', icon: Icon, className = '' }) => {
  const colorClasses = {
    'hava-red': 'bg-hava-red/10 text-hava-red',
    'trust-blue': 'bg-trust-blue/10 text-trust-blue',
    'accent-orange': 'bg-accent-orange/10 text-accent-orange',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${colorClasses[color]} px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider ${className}`}>
      {Icon ? (
        <Icon className="w-4 h-4" />
      ) : (
        <div className={`w-2 h-2 rounded-full animate-pulse bg-${color}`} style={{ backgroundColor: color === 'hava-red' ? 'hsl(var(--hava-red))' : color === 'trust-blue' ? 'hsl(var(--trust-blue))' : 'hsl(var(--accent-orange))' }} />
      )}
      {children}
    </div>
  );
};

/**
 * SectionHeader — centered headline block: badge + heading w/ gradient + intro.
 */
export const SectionHeader = ({ badge, badgeColor = 'hava-red', badgeIcon, title, titleGradient, intro, className = '' }) => {
  return (
    <div className={`text-center mb-10 ${className}`}>
      {badge && (
        <div className="mb-4">
          <SectionBadge color={badgeColor} icon={badgeIcon}>{badge}</SectionBadge>
        </div>
      )}
      <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-3 leading-tight">
        {title}{' '}
        {titleGradient && <span className="gradient-text">{titleGradient}</span>}
      </h2>
      {intro && <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">{intro}</p>}
    </div>
  );
};
