import { ChangeEvent, useState, useCallback, memo } from 'react';
import { Button } from 'components/common/Button/Button';
import { List } from 'components/common/List/List';
import { formatSuggestions } from './helpers';
import { Loader } from 'components/common/Loader/Loader';
import { api } from 'api/api';
import { DataType } from './types';
import search from 'assetes/svg/search_white.svg';
import styles from './AdressPage.module.scss';

const AddressPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleError = (errorMessage: string): void => {
    setError(errorMessage);
    setSearchResults([]);
    setIsLoading(false);
  };

  const postData = async (value: string): Promise<string[]> => {
    try {
      const response = await api.post('', {
        query: value,
        count: 20,
      });
      const res: string[] = response.data.suggestions.map((data: DataType) => formatSuggestions(data));
      setError(null);
      return res;
    } catch (error) {
      handleError('Что-то пошло не так.. Пожалуйста, попробуйте еще раз :)');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const results = await postData(searchTerm);
      if (results.length === 0) {
        handleError('Ничего не найдено. Попробуйте изменить запрос.');
      } else {
        setError(null);
      }
      setSearchResults(results.filter(Boolean));
    } catch (error) {
      console.error('Error:', error);
    }
  }, [searchTerm, postData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleSearchButtonClick = useCallback(async () => {
    if (searchTerm.length >= 3) {
      await fetchData();
    } else {
      handleError('Введите как минимум 3 символа для начала поиска.');
    }
  }, [fetchData, searchTerm]);

  return (
    <div className={styles.block}>
      <h2>Поиск адресов</h2>
      <p className={styles.placeholder}>Введите интересующий вас адрес</p>
      <div className={styles.search}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Введите интересующий вас адрес"
        />
        <Button onClick={handleSearchButtonClick} text="Поиск" img={search} className={styles.button} />
      </div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && searchResults.length ? <List title="Адреса" list={searchResults} /> : <></>}
    </div>
  );
};

export default memo(AddressPage);
