import { ChangeEvent, useState } from 'react';
import styles from './AddEquipmentPhoto.module.scss';
import ChatRoomSendButton from 'src/components/Chat/ChatRoom/ChatRoomSendButton';
import InputFile from './InputFile';

type Props = {};

const AddEquipmentPhoto = ({}: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);

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
      }
    }
  };

  return (
    <section className={styles.photoAdd}>
      <div className={styles.container}>
        <div className={styles.photoAdd__input}>
          {selectedFile ? (
            <div className={styles.photos}>
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
      <ChatRoomSendButton />
    </section>
  );
};

export default AddEquipmentPhoto;
