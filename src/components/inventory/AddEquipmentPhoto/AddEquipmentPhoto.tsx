import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './AddEquipmentPhoto.module.scss';
import ChatRoomSendButton from 'src/components/Chat/ChatRoom/ChatRoomSendButton';
import InputFile from './InputFile';

type Props = {
  closeModal: () => void;
};

const AddEquipmentPhoto = ({ closeModal }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    setTimeout(() => {
      scrollToRight();
    }, 100);
  }, [images]);
  const imageExtensionsRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];

      const isImageFile = imageExtensionsRegex.test(file.name);
      if (isImageFile) {
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(file);
        setImages(prevImages => [...prevImages, imageUrl]);
        scrollToRight();
      }
    }
  };

  const photosRef = useRef<HTMLDivElement>(null);

  const scrollToRight = () => {
    if (photosRef.current) {
      photosRef.current.scrollLeft = photosRef.current.scrollWidth;
    }
  };
  return (
    <section className={styles.photoAdd}>
      <div className={styles.container}>
        <div className={styles.photoAdd__input}>
          {selectedFile ? (
            <div className={styles.photos} ref={photosRef}>
              {images.map(image => (
                <img key={image} src={image} />
              ))}
            </div>
          ) : (
            <InputFile onChange={handleFileChange} />
          )}
        </div>
        <div className={styles.photoAdd__input}>
          <InputFile onChange={handleFileChange} />
        </div>
      </div>
      <ChatRoomSendButton onClick={closeModal} />
    </section>
  );
};

export default AddEquipmentPhoto;
