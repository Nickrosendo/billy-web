import React from "react";

import styles from "./MainEmptyStateStyles.module.css";

interface IMainEmptyStateProps {
  title: string;
}

export const MainEmptyState: React.FC<IMainEmptyStateProps> = (props) => {
  return (
    <div className={styles.container}>
      <h2> {props.title} </h2>
    </div>
  );
};
