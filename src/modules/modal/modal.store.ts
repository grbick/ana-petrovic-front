import { makeAutoObservable } from "mobx";

import { ModalsEnum } from "./modal.types";

class ModalStore {
  constructor() {
    makeAutoObservable(this);
  }

  openedModal: ModalsEnum | null = null;

  modalData: unknown;

  openModal(modalType: ModalsEnum, modalData?: unknown) {
    if (modalData) this.modalData = modalData;
    this.openedModal = modalType;
  }

  clearModal() {
    this.openedModal = null;
  }
}

const modalStore = new ModalStore();

export { modalStore };
