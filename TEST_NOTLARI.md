# Kodsal Test Notları
## Test 1: İlk açılış durumu

- **Girdi veya işlem:** `icerikler.html` sayfasını aç; arama alanı boş.
- **Beklenen sonuç:** Beş kartın tamamı görünür, sayaç 5'i gösterir ve boş sonuç mesajı gizlidir.
- **Gerçekleşen sonuç:** Beş kart görünürdü, sayaç “Gösterilen araç sayısı: 5” metnini gösterdi ve boş sonuç mesajı gizliydi.
- **Karar:** Geçti.

## Test 2: Büyük harfle arama

- **Girdi veya işlem:** Arama alanına `GITHUB` yaz.
- **Beklenen sonuç:** Büyük/küçük harf farkı yok sayılır; yalnızca GitHub kartı görünür ve sayaç 1 olur.
- **Gerçekleşen sonuç:** Bir kart göründü ve sayaç “Gösterilen araç sayısı: 1” oldu.
- **Karar:** Geçti.

## Test 3: Baştaki ve sondaki boşluklar

- **Girdi veya işlem:** Arama alanına `  GitHub  ` yaz.
- **Beklenen sonuç:** Baştaki ve sondaki boşluklar temizlenir; yalnızca GitHub kartı görünür ve sayaç 1 olur.
- **Gerçekleşen sonuç:** Bir kart göründü ve sayaç “Gösterilen araç sayısı: 1” oldu.
- **Karar:** Geçti.

## Test 4: Yalnızca başlıkta arama

- **Girdi veya işlem:** `Java` yaz. Bu sözcük IntelliJ IDEA kartının açıklamasında yer alır, başlığında yer almaz.
- **Beklenen sonuç:** Arama açıklama metnini kullanmadığı için hiçbir kart eşleşmez; sayaç 0 olur ve boş sonuç mesajı görünür.
- **Gerçekleşen sonuç:** Görünür kart sayısı 0 oldu, sayaç “Gösterilen araç sayısı: 0” metnini gösterdi ve boş sonuç mesajı görünür hale geldi.
- **Karar:** Geçti.

## Test 5: Eşleşme bulunamaması

- **Girdi veya işlem:** Arama alanına `no-such-tool` yaz.
- **Beklenen sonuç:** Hiçbir kart görünmez, sayaç 0 olur ve boş sonuç mesajı gösterilir.
- **Gerçekleşen sonuç:** Görünür kart sayısı 0 oldu, sayaç “Gösterilen araç sayısı: 0” metnini gösterdi ve boş sonuç mesajı görünür hale geldi.
- **Karar:** Geçti.

## Test 6: Aramayı temizleme

- **Girdi veya işlem:** Eşleşme olmayan `no-such-tool` araması açıkken **Temizle** butonuna bas.
- **Beklenen sonuç:** Arama alanı boşalır, beş kartın tamamı görünür, sayaç 5 olur ve boş sonuç mesajı gizlenir.
- **Gerçekleşen sonuç:** Arama alanı boşaldı, beş kart görünür hale geldi, sayaç “Gösterilen araç sayısı: 5” oldu ve boş sonuç mesajı gizlendi.
- **Karar:** Geçti.

## Test 7: Unicode ve büyük/küçük harf normalizasyonu

- **Girdi veya işlem:** Tarayıcıda her aramayı ayrı ayrı gir: `GITHUB`, `GİTHUB`, `GitHub`, `github`, `GiThUb`.
- **Beklenen sonuç:** Her aramada yalnızca GitHub kartı görünür, sayaç 1 olur ve boş sonuç mesajı gizli kalır.
- **Gerçekleşen sonuç:** Beş aramanın her biri bir GitHub kartı gösterdi; her seferinde sayaç “Gösterilen araç sayısı: 1” oldu ve boş sonuç mesajı gizli kaldı.
- **Karar:** Geçti.

## Test 8: Unicode aramasından sonra Temizle ve sayaç

- **Girdi veya işlem:** `GiThUb` aramasından sonra **Temizle** butonuna bas.
- **Beklenen sonuç:** Arama alanı boşalır; beş kart görünür, sayaç 5 olur ve boş sonuç mesajı gizlenir.
- **Gerçekleşen sonuç:** Arama alanı boşaldı, beş kart görünür hale geldi, sayaç “Gösterilen araç sayısı: 5” oldu ve boş sonuç mesajı gizlendi.
- **Karar:** Geçti.
