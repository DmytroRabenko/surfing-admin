import SearchForm from '../SearchForm';
import s from './DashboardHeader.module.scss';

const currentUser = 'Maks'; //from store provider

const DashboardHeader = () => {
  return (
    <div className={s.dashboardHeader}>
      <div>Hello {currentUser} 👋,</div>
      <SearchForm />
    </div>
  );
};

export default DashboardHeader;
