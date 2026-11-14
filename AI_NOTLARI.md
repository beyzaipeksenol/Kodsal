# Kodsal Projesi: Copilot Çalışma Notları

Bu belge, Kodsal'ın üç sayfalı HTML, CSS ve JavaScript çalışmaları sırasında Copilot ile yapılan iş birliğini ve uygulanan kararları özetler. Promptlar, konuşmadaki isteklerin anlamını koruyan kısa özetlerdir.

## Kullanılan Promptlar

1. **Üç sayfalı siteyi planla:** Yeni başlayan bilgisayar programcılığı öğrencileri için Kodsal sitesinin sayfa yapısını, sayfa içeriklerini, arama yaklaşımını ve kabul ölçütlerini planlama isteği. Amaç, kodlamaya başlamadan kapsamı belirlemek.
2. **Ana sayfanın HTML'sini hazırla:** Yalnızca `index.html` dosyasını oluşturma; ortak navigasyon, proje adı, hedef kitle, kısa tanıtım ve CSS/JavaScript bağlantıları ekleme isteği. Amaç, ana sayfa iskeletini kurmak.
3. **Araçlar sayfasının HTML'sini hazırla:** Yalnızca `icerikler.html` dosyasını oluşturma; beş araç kartı ve arama arayüzü işaretlemesi ekleme isteği. Aramanın ileride yalnızca kart başlıklarına göre çalışacağı özellikle belirtildi. Amaç, içerik ve arama alanlarının HTML yapısını hazırlamak.
4. **Hakkında sayfasının HTML'sini hazırla:** Yalnızca `hakkinda.html` dosyasını oluşturma ve projenin amacı, hedef kitlesi, faydası ve araç seçimlerini anlatma isteği. Amaç, ortak sayfa yapısını koruyarak proje bilgisini sunmak.
5. **Ortak CSS tasarımını oluştur:** Üç HTML sayfasındaki mevcut sınıfları değiştirmeden `style.css` dosyasını hazırlama; yeşil palet, responsive görünüm, klavye odağı ve azaltılmış hareket desteği isteği. Amaç, sayfalar arasında tutarlı görünüm sağlamak.
6. **Başlık bazlı aramayı uygula:** Yalnızca `script.js` dosyasını değiştirme; `input` ve Temizle etkileşimleriyle kartları sadece `h2` metnine göre filtreleme, sayaç ve boş sonuç durumunu güncelleme isteği. Amaç, arama işlevini HTML'de tanımlanan ID'lere bağlamak.
7. **Unicode uyumlu aramayı sağla:** Yalnızca `script.js` dosyasını güncelleme; arama metniyle kart başlığını aynı Unicode normalizasyonundan geçirme ve Türkçe `İ` kaynaklı büyük/küçük harf eşleşme sorununu çözme isteği. Amaç, İngilizce araç adlarını farklı harf biçimleriyle de eşleştirmek.

## Kabul Edilen Öneriler

- Sayfalarda ortak header, navigasyon ve footer kullanıldı. Böylece gezinme biçimi sayfalar arasında tutarlı kaldı.
- HTML içerikleri `header`, `nav`, `main`, `section`, `article` ve `footer` gibi semantik etiketlerle düzenlendi. Bu yapı, içeriğin amacını açık hale getiriyor.
- Araç aramasında `input` olayı kullanıldı; kullanıcı yazdıkça liste güncelleniyor. Sorgu ve başlık aynı `normalizeText()` fonksiyonundan geçiyor: Unicode NFD, birleşik aksan temizliği, `trim()` ve `toLowerCase()` uygulanıyor.
- Eşleşme için her kartın yalnızca `h2` başlığı okunuyor. Açıklama ve diğer metinler aramaya dahil edilmiyor; bu, ödevde belirtilen arama kapsamını karşılıyor.
- Kartların görünürlüğü `hidden` özelliğiyle ayarlanıyor. Sayaç görünen kartlardan hesaplanıyor ve sonuç yokken boş sonuç mesajı gösteriliyor.
- Temizle butonu input değerini boşaltıp aynı filtreleme fonksiyonunu tekrar çalıştırıyor. Böylece kartların görünürlüğü, sayaç ve boş sonuç durumu birlikte sıfırlanıyor.
- Arama alanı bulunmayan sayfalarda hata oluşmaması için arama öğelerinin varlığı kontrol ediliyor. `script.js` üç sayfada da yüklendiği için bu kontrol gerekli.
- CSS'te renk değişkenleri, responsive grid, görünür klavye odağı ve `prefers-reduced-motion` kuralı kullanıldı. Bu tercihler tasarımın tutarlı, farklı ekranlarda kullanılabilir ve klavye kullanıcıları için anlaşılır olmasına yardımcı oluyor.

Bu çalışma sırasında reddedilen bir Copilot önerisi olmadı.

## Arama Sistemi Nasıl Çalışıyor?

### Event listener'lar

- `tool-search` alanındaki `input` event listener'ı, her yazma veya silme işleminde `updateResults()` fonksiyonunu çağırıyor. Böylece filtreleme anlık gerçekleşiyor.
- `clear-search` butonundaki `click` event listener'ı, input değerini boşaltıyor ve `updateResults()` fonksiyonunu yeniden çağırıyor. Boş arama bütün kartları görünür hale getiriyor.
- Sayfa ilk yüklendiğinde de `updateResults()` bir kez çalıştırılıyor; başlangıçtaki kart görünürlüğü ve sayaç böylece doğru ayarlanıyor.

### Filtreleme koşulu

1. Input değeri ve kart başlığı aynı `normalizeText()` fonksiyonundan geçirilir. Fonksiyon metni `normalize("NFD")` ile ayrıştırır, `[\u0300-\u036f]` aralığındaki birleşik aksan işaretlerini siler, `trim()` ile kenar boşluklarını temizler ve `toLowerCase()` ile küçük harfe çevirir.
2. Kart başlığı için her `.tool-card` içinden yalnızca `h2` öğesinin metni alınır. Açıklamalar ve diğer kart metinleri aramaya dahil edilmez.
3. Başlığın arama metnini içerip içermediği `title.includes(query)` ile kontrol ediliyor. İçeriyorsa kart gösteriliyor; içermiyorsa gizleniyor.
4. Gösterilen kartlar sayılıyor. Sayaç bu sayıyla güncelleniyor; sayı sıfırsa `no-results` gösteriliyor, sıfırdan büyükse gizleniyor.

Arama davranışı tarayıcıda kontrol edildi: ilk açılışta beş kart görünüyordu; `GITHUB` ve boşluklu `GitHub` aramaları bir sonuç verdi; yalnızca açıklamada bulunan `Java` araması sonuç vermedi; Temizle butonu beş kartı tekrar gösterdi.

### Unicode ve Türkçe büyük İ

Unicode'da aynı harf, tek bir birleşik karakter veya temel harf ile ayrı bir birleşik aksan işareti olarak temsil edilebilir. `normalize("NFD")`, metni temel karakter ve aksan bileşenlerine ayırır. Birleşik aksanları temizlemek, görsel olarak aynı metnin farklı Unicode gösterimlerinin aramada farklı sonuç vermesini önler.

Bu yaklaşım özellikle Türkçe büyük noktalı `İ` ile İngilizce yazımlardaki `I` ayrımını çözer. `GİTHUB`, NFD sonrasında `I` ve birleşik nokta işaretine ayrılır; işaret temizlenince `GITHUB` olur ve `toLowerCase()` ile `github` biçimine dönüşür. ASCII `I` da aynı şekilde `i` olur. Türkçe yerel ayar dönüşümü (`toLocaleLowerCase("tr-TR")`) ASCII `I` harfini noktasız `ı` yapabildiği için burada yerel ayardan bağımsız `toLowerCase()` tercih edilir. Böylece İngilizce araç adlarında `GITHUB`, `GİTHUB`, `GitHub`, `github` ve `GiThUb` aynı kartla eşleşir.
