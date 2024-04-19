import SearchForm from '../SearchForm';
import s from './DashboardHeader.module.scss';

const currentUser = 'Maks'; //from store provider

const DashboardHeader = () => {
  return (
    <div className={s.dashboardHeader}>
      <h2>Hello {currentUser} 👋,</h2>
      <SearchForm variant="#ffff" onSearch={() => {}} />
    </div>
  );
};

export default DashboardHeader;
