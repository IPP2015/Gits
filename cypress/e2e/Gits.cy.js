describe('template spec', () => {
  it('skenario 1', () => {
    cy.visit('https://www.hukumonline.com/',{ failOnStatusCode: false })
    cy.get('img.main-logo').should('be.visible')
    cy.get('input.form-control.search-input').type('Peraturan Pemerintah Nomor 40 Tahun 2006')
    // cy.get('button.btn.btn-outline-light.p-0.px-2').click();
    cy.contains('Peraturan').click()
    cy.get('a.css-1j001h').should('have.value','Peraturan Pemerintah Nomor 40 Tahun 2006')
    cy.get('p.css-1iiildh').should('have.value','TATA CARA PENYUSUNAN RENCANA PEMBANGUNAN NASIONAL')
    cy.get('p.css-1w49yes').should('have.value','melaksanakan ketentuan Pasal 27 ayat (1) Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional perlu menetapkan Peraturan Pemerintah tentang Tata Cara Penyusunan Rencana Pembangunan')
    cy.get('span.css-f4bp75').should('have.value','Ditetapkan: 29 November 2006')
    cy.get('span.css-f4bp75').should('have.value','Berlaku: 29 November 2006')
    cy.contains('Peraturan Pemerintah Nomor 40 Tahun 2006').should('be.visible')
    cy.contains('TATA CARA PENYUSUNAN RENCANA PEMBANGUNAN NASIONAL').should('be.visible')
    cy.contains('melaksanakan ketentuan Pasal 27 ayat (1) Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional perlu menetapkan Peraturan Pemerintah tentang Tata Cara Penyusunan Rencana Pembangunan').should('be.visible')
    cy.contains('Ditetapkan: 29 November 2006').should('be.visible')
    cy.contains('Berlaku: 29 November 2006').should('be.visible')
    cy.contains('Status: Login Atau Berlangganan Untuk Akses Fitur Ini').should('be.visible')
  })
  it('skenario 2',() => {
    cy.visit('https://www.hukumonline.com',{ failOnStatusCode: false })
    cy.get('footer').scrollIntoView()
    cy.contains('Karir').should('be.visible')
    cy.contains('Karir').click()
    cy.contains('Senior Product Manager (project based)').should('be.visible')
    cy.window().then((win) => {
      const orig = win.open
    
      win.open = function (url, target, features) {
        return orig.call(this, url, '_self', features)
      }
    })
    //berhasil tapi new tab chrome cypress tidak support
    cy.get("a[href='https://glints.com/opportunities/jobs/6e1e26bb-4fcb-421a-aab3-5e55d2821210?utm_medium=share&amp;utm_campaign=employers']").click()

    // gagal load page atau gagal direct ke page yang tertuju setelah diubah attribut
    cy.get("a[href='https://glints.com/opportunities/jobs/6e1e26bb-4fcb-421a-aab3-5e55d2821210?utm_medium=share&amp;utm_campaign=employers']")
  .should('have.attr', 'target', '_blank') 
  .then(($link) => {
    $link[0].setAttribute('target', '_self');
    $link[0].click();
  });

    //gagal load page atau gagal direct ke page yang tertuju setelah dihapus attribut
    cy.get("a[href='https://glints.com/opportunities/jobs/6e1e26bb-4fcb-421a-aab3-5e55d2821210?utm_medium=share&amp;utm_campaign=employers']")
    .should('have.attr', 'target', '_blank') 
    .then(($link) => {
      $link[0].removeAttribute('target');
      $link[0].click();
    });

    // berhasil akan tetapi bukan click tapi visit
    let ttt = cy.get('#__next > div:nth-child(2) > div.pt-4.mb-5.container > div > div:nth-child(2) > a')
    .should('have.attr', 'href')
    .then((href) => {
      cy.visit(href)
    }) 
    console.log(ttt)
    let test = cy.location()
    console.log(test)
  })
})