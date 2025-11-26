import SidebarDropdown from './SidebarDropdown';

const SidebarDropdownConfig = {
  key: 'SidebarDropdown',
  Name: 'SidebarDropdown',
  ComponentInstance: (
    <SidebarDropdown
      OptionsList={[
        {
          label: 'Dashboard',
          options: [
            { label: 'Home', onClick: () => alert('Home clicked'), style: { color: 'blue' }, arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Explore', onClick: () => alert('Explore clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Reels', onClick: () => alert('Reels clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Messages', onClick: () => alert('Messages clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
          ],
          dropdownFeatures: { trigger: 'hover', style: { backgroundColor: '#f0f0f0' } },
        },
        {
          label: 'Profile',
          options: [
            { label: 'View Profile', onClick: () => alert('View Profile clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Edit Profile', onClick: () => alert('Edit Profile clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            {
              label: 'Settings',
              subOptions: [
                { label: 'Privacy', onClick: () => alert('Privacy clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                { label: 'Security', onClick: () => alert('Security clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                { label: 'Notifications', onClick: () => alert('Notifications clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                {
                  label: 'Advanced Settings',
                  subOptions: [
                    { label: 'Data Download', onClick: () => alert('Data Download clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                    { label: 'Account Deletion', onClick: () => alert('Account Deletion clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                    { label: 'Blocked Users', onClick: () => alert('Blocked Users clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Support',
          options: [
            { label: 'Help Center', onClick: () => alert('Help Center clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Report a Problem', onClick: () => alert('Report clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            {
              label: 'Resources',
              subOptions: [
                { label: 'API Documentation', onClick: () => alert('API Docs clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                { label: 'Community Guidelines', onClick: () => alert('Guidelines clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                {
                  label: 'Legal',
                  subOptions: [
                    { label: 'Terms of Service', onClick: () => alert('Terms clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                    { label: 'Privacy Policy', onClick: () => alert('Privacy clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                    { label: 'Cookies Policy', onClick: () => alert('Cookies clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Tools',
          options: [
            { label: 'Saved', onClick: () => alert('Saved clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Activity', onClick: () => alert('Activity clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
            { label: 'Logout', onClick: () => alert('Logout clicked'), arrowDirection: 'top', hoverArrowDirection: 'bottom' },
          ],
        },
      ]}
      SidebarFeatures={{
        expanded: true,
        position: 'left: 0',
        size: '250px, 100%',
        closeByClick: false,
        style: { border: '1px solid gray' },
      }}
    />
  ),
};

export default SidebarDropdownConfig;
