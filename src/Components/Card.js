import React from 'react';
import { CardWrapper,TextWrapper,Heading, DeleteButton } from '../AppElements';
import Delete from './Delete';

function Card({ data }) {

  const handleDelete = () => {
    Delete(data.id)
  };

  return (
    <CardWrapper className='card'>
        <h2>{data.id}</h2>
        <Heading>{data.name}</Heading>
        <TextWrapper>{data.description}</TextWrapper>
        <TextWrapper>{data.createdTime}</TextWrapper>
        <TextWrapper>{data.color}</TextWrapper>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </CardWrapper>
  );
}

export default Card;
