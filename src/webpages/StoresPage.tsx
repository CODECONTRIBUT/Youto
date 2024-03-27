import InfiniteScroll from 'react-infinite-scroll-component';
import useStores from '../hooks/useStores';
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import StoreContainer from '../components/StoreContainer';
import StoreCard from '../components/StoreCard';

const StoresPage = () => {
    const {data, fetchNextPage, isLoading, error, hasNextPage} = useStores();
    const totalStores = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    if (isLoading) return <Spinner />;
    if (error) throw error;

  return (
    <InfiniteScroll 
        dataLength={totalStores}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={8} padding='10px'>
                {data?.pages.map((page, index) => <React.Fragment key={index}>{page.results.map(store => <StoreContainer key={store.id}><StoreCard store={store}></StoreCard></StoreContainer>)}</React.Fragment>)}
            </SimpleGrid>
    </InfiniteScroll>
  )
}

export default StoresPage