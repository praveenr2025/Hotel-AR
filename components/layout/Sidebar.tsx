'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';


type SidebarVariant = 'partner' | 'hotel';

interface SidebarProps {
  variant: SidebarVariant;
}

interface NavLink {
  href: string;
  label: string;
  iconPaths: string[];
}


function Icon({ paths }: { paths: string[] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}


const SIDEBAR_CONFIG: Record<
  SidebarVariant,
  {
    brand: {
      logo: string;
      name: string;
      subtitle: string;
      footer: React.ReactNode;
    };
    sectionLabel: string;
    links: NavLink[];
  }
> = {
  partner: {
    brand: {
      logo: 'P',
      name: 'HotelHub Partner',
      subtitle: 'Portal for agents & customers',
      footer: (
        <>
          Signed in as<br />
          <strong>Orbit Travels</strong><br />
          Partner ID: AG-ORBIT-102
        </>
      )
    },
    sectionLabel: 'WORKSPACE',
    links: [
      {
        href: '/overview',
        label: 'Overview',
        iconPaths: [
          'M3 3h7v7H3z',
          'M14 3h7v7h-7z',
          'M3 14h7v7H3z',
          'M14 14h7v7h-7z'
        ]
      },
      {
        href: '/bookings-p',
        label: 'Bookings',
        iconPaths: [
          'M3 4h18v17H3z',
          'M8 3v4',
          'M16 3v4',
          'M3 10h18'
        ]
      },
      {
        href: '/invoices-p',
        label: 'Invoices',
        iconPaths: [
          'M7 3h10v18l-2-1-2 1-2-1-2 1-2-1V3z',
          'M9 7h6',
          'M9 11h6'
        ]
      },
      {
        href: '/payments',
        label: 'Payments',
        iconPaths: ['M3 6h18v12H3z', 'M3 10h18', 'M8 15h3']
      },
      {
        href: '/communications',
        label: 'Conversations',
        iconPaths: [
          'M5 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z'
        ]
      },
      {
        href: '/profile',
        label: 'Profile & Settings',
        iconPaths: ['M12 12a3 3 0 1 0 0-6', 'M4 21c0-4 16-4 16 0']
      }
    ]
  },

  hotel: {
    brand: {
      logo: 'H',
      name: 'HotelHub Console',
      subtitle: 'Manage operations & billing',
      footer: (
        <>
          Signed in as<br />
          <strong>Grand Meridian Hotel</strong><br />
          Property ID: GMH-9843
        </>
      )
    },
    sectionLabel: 'CORE',
    links: [
      {
        href: '/dashboard',
        label: 'Dashboard',
        iconPaths: [
          'M3 3h7v7H3z',
          'M14 3h7v7h-7z',
          'M3 14h7v7H3z',
          'M14 14h7v7h-7z'
        ]
      },
      {
        href: '/users',
        label: 'Users',
        iconPaths: [
          'M12 11a4 4 0 1 0 0-8',
          'M5 21c0-4 14-4 14 0'
        ]
      },
      {
        href: '/rooms',
        label: 'Rooms & Property',
        iconPaths: [
          'M3 11h18',
          'M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4',
          'M7 11v6',
          'M17 11v6'
        ]
      },
      {
        href: '/contracts',
        label: 'Contracts',
        iconPaths: [
          'M7 3h8l4 4v14H7z',
          'M15 3v4h4',
          'M10 11h6'
        ]
      },
      {
        href: '/bookings',
        label: 'Bookings',
        iconPaths: [
          'M3 4h18v17H3z',
          'M8 3v4',
          'M16 3v4',
          'M3 10h18'
        ]
      },
      {
        href: '/invoices',
        label: 'Invoices',
        iconPaths: [
          'M7 3h10v18l-2-1-2 1-2-1-2 1-2-1V3z',
          'M9 7h6',
          'M9 11h6'
        ]
      },
      {
        href: '/payments',
        label: 'Payments',
        iconPaths: ['M3 6h18v12H3z', 'M3 10h18', 'M8 15h3']
      },
      {
        href: '/communications',
        label: 'Invoice Chat',
        iconPaths: [
          'M5 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z'
        ]
      },
      {
        href: '/profile',
        label: 'Profile & Settings',
        iconPaths: [
          'M12 12a3 3 0 1 0 0-6',
          'M4 12h2',
          'M18 12h2',
          'M12 4v2',
          'M12 18v2'
        ]
      }
    ]
  }
};



export default function Sidebar({ variant }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const config = SIDEBAR_CONFIG[variant];
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      {/* HEADER */}
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarHeaderMain}>
          <div className={styles.brandLogo}>{config.brand.logo}</div>
          {!isCollapsed && (
            <div className={styles.brandText}>
              <div className={styles.brandName}>{config.brand.name}</div>
              <div className={styles.brandSubtitle}>{config.brand.subtitle}</div>
            </div>
          )}
        </div>

        <button
          className={styles.sidebarCollapseToggle}
          onClick={() => setIsCollapsed(v => !v)}
          aria-label="Toggle sidebar"
        >
          <Icon paths={['M10 6l4 6-4 6']} />
        </button>
      </div>

      {/* NAV */}
      <div>
        {!isCollapsed && (
          <div className={styles.navSectionLabel}>{config.sectionLabel}</div>
        )}

        <ul className={styles.navList}>
          {config.links.map(link => (
            <li key={link.href} className={styles.navItem}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  isActive(link.href) ? styles.active : ''
                }`}
              >
                <span className={styles.icon}>
                  <Icon paths={link.iconPaths} />
                </span>

                {!isCollapsed && (
                  <span className={styles.navLabel}>{link.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}
      {!isCollapsed && (
        <div className={styles.sidebarFooter}>{config.brand.footer}</div>
      )}
    </aside>
  );
}
