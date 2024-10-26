import { Component } from '@angular/core';
import { ImageStackComponent } from '../image-stack/image-stack.component';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [ImageStackComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent {
  public clientImgaes = ["https://s3-alpha-sig.figma.com/img/f748/2a61/37ae06f7ae54b1c6e5f71932736f4094?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQCf4nPoxfri-Ju7zP6KWFKiNs56qxmS~DQnCjPg3CePTmIhzhPhMrFUc3YVJpahgHgPQtL9hzaOre93Di9wf6AavOs9735WFNZII6RWsuuz4a8IqGRNIqEGa43PXBx8TFOZi6XUQ-DmktzFfm~NoxzmMGcOzJjHXK5o7DHTIlB2YMuw25v~T3~eNPGv6Z8kLqwl-KaUOb6nr9ahbr7TYWT~sU1wK-zUZVXUKZgphD829trvXPzoCwKFEpCtO-Ngdh7n8kuJZRUKSSYR91BIfgWvvLrihCQnsrFUYAD05rKmrC86JtC1epDZwetFPaUNf4lymbM6NK9CrJM09NHq4g__",
    "https://s3-alpha-sig.figma.com/img/a2a7/19bc/a6a9c8689f10585daf75edc535e9aaef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WG3wYcFLSG~7AFwXE0zNy-enPUzwO8MuLSxNKhcGo91Evr9KIWduypnHg5WhHLoV1wC5-zdrijqbQKxkZyMMd-AhWboASoh1gctPzs5Q6XXmS29siY0-O33QXljTll8T8hrRccyTGZ3edxTAw9Lr1ntoGHZ7Kde-W~hEE6iP0yj6HOVZPo6f7q5nIsqBSQSQW6K89hG02wa6Idfjx-pvwmniRa6zyzIFViXQ6va7wSzj7T46QJt6~i6Ibmfi6tvzE5b1aoAjWmQn2IkwbxV6bo0tGKBp71kUq1SON81WbfgiDM3nFW084KJ15g368zueHB7Papo6eFHPyAPYoxdIaw__",
     "https://s3-alpha-sig.figma.com/img/2116/20cc/04ef5aa09c07a337102bc456e31d5676?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FP4BGyZ6fywKckwqj5vZ~5IPna9~PSypJuSljHGFb3TR6sc0MzPX5Yfmi~cOq6DN14EHGL-m396dqBacGFd~Hnqy31a52617P~wvl8SherqJQXVtvb8g30yfIbEDVp8ruxFd9YLzCmiuquI6w5pyPIR5XrocePfAfUD1WTkf04f0yZUwd7Aj5Qkfyyb1p5fhBolOhqs2MA-pWO9f3DFTAC9bwjOsfR-xAchjmFDBWKz~Zh-hAqVhegQyHrgh4nD1T6d99gEn-KJpoMVdwOuAuah81qV0VtxIi1HABWhnMPuHbEnmy-5QyXaG2EsWKdLK1Fn5zYc5TZjG6wh8glsFhQ__"];
}
