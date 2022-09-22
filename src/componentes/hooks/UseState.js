import { useState } from 'react';
import Modal from '../Exemplo 1/Modal';
import ButtonModal from '../Exemplo 1/ButtonModal';

const UseState = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default UseState;
