import LucideIcons from './lucide'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from './tab'
import { Modal, ModalHeader, ModalBody, ModalFooter } from './modal'
import { VueSignaturePad } from 'vue-signature-pad'
import { AccordionGroup, AccordionItem, Accordion, AccordionPanel } from './accordion'

export default (app) => {
  app.component('Modal', Modal)
  app.component('ModalHeader', ModalHeader)
  app.component('ModalBody', ModalBody)
  app.component('ModalFooter', ModalFooter)
  app.component('TabGroup', TabGroup)
  app.component('TabList', TabList)
  app.component('Tab', Tab)
  app.component('TabPanels', TabPanels)
  app.component('TabPanel', TabPanel)
  app.component('AccordionGroup', AccordionGroup)
  app.component('AccordionItem', AccordionItem)
  app.component('Accordion', Accordion)
  app.component('AccordionPanel', AccordionPanel)
  app.component('VueSignaturePad', VueSignaturePad)

  for (const [key, icon] of Object.entries(LucideIcons)) {
    app.component(key, icon)
  }
}
